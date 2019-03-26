const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const argon2 = require('argon2');
const fs = require('fs');
const User = require('../models/user');

let options = {
  'jwtFromRequest': ExtractJwt.fromAuthHeaderAsBearerToken(),
  'secretOrKey': process.env.PUBLIC_KEY,
  'issuer': process.env.ISSUER,
  'audience': process.env.AUDIENCE
};

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  async (username, password, cb) => {
    let user;
    let verification;

    try {

      user = await User.find({ 'email': username });

      if (!user[0]) {
        return cb(null, false);
      }

      verification = await argon2.verify(user[0].password, password);
      if (verification) {
        return cb(null, user);
      } else {
        return cb(null, false);
      }
    } catch (e) {
      console.log(e);
      return cb(null, false);
    }
  }
));

/*

passport.use(new LocalStrategy(
  async (username, password, cb) => {
    try {
      let user = await psql('users').where('username', username);

      if (!user[0]) {
        return cb(null, false);
      }

      let verifyResult = await argon2.verify(user[0].password, password);
      if (verifyResult) {
        return cb(null, user);
      } else {
        return cb(null, false);
      }

    } catch (e) {
      console.log(e);
      return cb(null, false);
    }
}));
*/
