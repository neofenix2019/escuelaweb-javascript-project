const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
let controller = new UserController();

router.get('/fetchandorder', controller.fetchAndOrderUsers);
router.get('/fetchandfind/age/:age', controller.fetchAndFindUsers);
router.get('/fetchandcount', controller.fetchAndCountUsers);

controller = null;

module.exports = router;