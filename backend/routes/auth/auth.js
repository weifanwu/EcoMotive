const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
require("dotenv").config();
const GOOGLE_CLIENT_ID =
  "73295202240-fh1k4u0dl043vdst6t5di0bq9kdntkri.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const callback_google = process.env.BACKEND_HOST + "/auth/google/callback";


passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: callback_google,
      passReqToCallback: true,
    },

    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
