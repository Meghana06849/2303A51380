const express = require("express");
const router = express.Router();
const Notification = require("../models/Notification");

// GET notifications (pagination + filter)
router.get("/", async (req, res) => {
  const { page = 1, limit = 10, notification_type } = req.query;

  const filter = {};
  if (notification_type) filter.type = notification_type;

  const data = await Notification.find(filter)
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(parseInt(limit));

  res.json({ notifications: data });
});

// Create notification
router.post("/", async (req, res) => {
  const notif = await Notification.create(req.body);
  res.json(notif);
});

// Mark as read
router.patch("/:id", async (req, res) => {
  await Notification.findByIdAndUpdate(req.params.id, { isRead: true });
  res.json({ message: "updated" });
});

module.exports = router;