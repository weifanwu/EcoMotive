require("dotenv").config();
var express = require("express");
var router = express.Router();
const passport = require("passport");
const frontend_url = process.env.FRONTEND_HOST;
const session = require("express-session");
require("./auth.js");

router.use(
  session({
    secret: "cats",
    resave: false,
    saveUninitialized: true,
    // comment this in the local environment ->
    cookie: {
      sameSite: 'none',
      secure: true
    }
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
    console.log("this is the user");
    console.log(req.user);


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
