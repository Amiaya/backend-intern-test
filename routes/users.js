const express = require('express');
const router = express.Router();

const controller = require('../controllers/user')

router.post('/signup', controller.register);

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
