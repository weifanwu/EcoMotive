require("dotenv").config();
var express = require("express");
var router = express.Router();
const passport = require("passport");
const User = require("../../models/userSchema.js");
const frontend_url = process.env.FRONTEND_HOST;
const session = require("express-session");
require("./auth.js");

router.use(
  session({
    secret: "weifan",
    resave: false,
    saveUninitialized: true,
    // comment this in the local environment ->
    // cookie: {
    //   sameSite: 'none',
    //   secure: true
    // }
    // <- comment this in the local environment
  })
);
router.use(passport.initialize());
router.use(passport.session());

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: frontend_url,
    failureRedirect: "/auth/google/failure",
  })
);

router.get("/login/success", async (req, res) => {
  try {
    if (req.user) {
      const email = req.user.email;
      const findUser = await User.findOne({ email: email });
      if (!findUser) {
        const avatar = req.user.picture;
        const lastName = req.user.family_name;
        const firstName = req.user.given_name;
        const carCollections = [];
        const user = new User({
          firstName,
          lastName,
          email,
          avatar,
          carCollections
        });
        await user.save();
        res.status(200).json({
          success: true,
          message: "new user created successfull",
          user: {
            "email": email,
            "firstName": firstName,
            "lastName": lastName,
            "carCollections": [],
            "avatar": avatar
          },
          cookies: req.cookies
        });
      } else {
        res.status(200).json({
          success: true,
          message: "successfull",
          user: findUser,
          cookies: req.cookies
        });
      }
    } else {
      res.status(500).send("Please sign in first");
    }
  } catch (error) {
    res.status(500).send("there is an internal error");
  }
});

router.get("/logout", (req, res, next) => {
  req.logout((error) => {
    if (error) {
      return next(error);
    } else {
      res.redirect(frontend_url);
    }
  });
});

router.get("/google/failure", (req, res) => {
  res.send("Failed to authenticate..");
});

module.exports = router;
