const express = require("express");
const router = express.Router();
const Notification = require("../models/Notification");

/**
 * =========================================
 * GET notifications (with pagination)
 * =========================================
 */
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const notifications = await Notification.find({ userId })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      page,
      limit,
      data: notifications
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


/**
 * =========================================
 * Mark single notification as read
 * =========================================
 */
router.patch("/read/:id", async (req, res) => {
  try {
    const updated = await Notification.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Notification not found" });
    }

    res.json({
      message: "Marked as read",
      data: updated
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


/**
 * =========================================
 * Mark all as read (bulk update)
 * =========================================
 */
router.patch("/read-all/:userId", async (req, res) => {
  try {
    const result = await Notification.updateMany(
      { userId: req.params.userId, isRead: false },
      { $set: { isRead: true } }
    );

    res.json({
      message: "All notifications marked as read",
      modifiedCount: result.modifiedCount
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


/**
 * =========================================
 * Unread count API
 * =========================================
 */
router.get("/unread-count/:userId", async (req, res) => {
  try {
    const count = await Notification.countDocuments({
      userId: req.params.userId,
      isRead: false
    });

    res.json({ unreadCount: count });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


/**
 * =========================================
 * CREATE notification (used by system)
 * =========================================
 */
router.post("/create", async (req, res) => {
  try {
    const { userId, message, type, sourceUserId, entityId } = req.body;

    const notification = await Notification.create({
      userId,
      message,
      type,
      sourceUserId,
      entityId,
      isRead: false,
      createdAt: new Date()
    });

    res.status(201).json(notification);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


/**
 * =========================================
 * NOTIFY ALL (QUEUE PLACEHOLDER)
 * Stage 5 integration point
 * =========================================
 */
router.post("/notify-all", async (req, res) => {
  try {
    const { student_ids, message } = req.body;

    // In real system: push to queue (Kafka / RabbitMQ / BullMQ)
    console.log("Queued notification job:", {
      studentCount: student_ids.length,
      message
    });

    res.json({
      message: "Notifications queued successfully"
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;