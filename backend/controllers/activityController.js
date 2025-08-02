const Activity = require('../models/Activity');

exports.saveActivity = async (req, res) => {
  const { hostname, timeSpent } = req.body;
  await Activity.create({ hostname, timeSpent, userId: req.userId });
  res.status(201).json({ message: 'Saved' });
};

exports.getReport = async (req, res) => {
  const data = await Activity.find({ userId: req.userId, date: { $gte: new Date(new Date().setHours(0, 0, 0, 0)) } });
  const report = {};
  data.forEach(({ hostname, timeSpent }) => {
    report[hostname] = (report[hostname] || 0) + timeSpent;
  });
  res.json(report);
};
