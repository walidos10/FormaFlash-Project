const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const User = require("../models/Admin");

//const User = require("../models/User");

const passport = require("passport");
require("dotenv").config({ path: "./config/.env" });

const secretOrKey = process.env.secretOrKey;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey,
};

passport.initialize();

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    const { id } = jwt_payload;

    try {
      const authAdmin = await User.findById({ _id: id });

      console.log(authAdmin);

      authAdmin ? done(null, authAdmin) : done(null, false);

      console.log(done);
    } catch (error) {
      console.log("Error", error);
    }
  })
);

module.exports = isAuthuser = () =>
  passport.authenticate("jwt", { session: false });
