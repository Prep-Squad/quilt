var express = require('express');
var router = express.Router();
import { User } from '../db/index'

/* GET users listing. */
router.post('/signup', function (req, res, next) {
 try {
   let user = req.body
   console.log('user: ', user)
   User.create(user)
 } catch (error) {
   console.log('error in the signup post route')
   next(error)
 }
});

module.exports = router;
