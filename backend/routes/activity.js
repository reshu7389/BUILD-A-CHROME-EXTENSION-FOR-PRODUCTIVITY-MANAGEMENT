const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { saveActivity, getReport } = require('../controllers/activityController');

router.post('/', auth, saveActivity);
router.get('/', auth, getReport);

module.exports = router;
