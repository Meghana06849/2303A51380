const axios = require("axios");

const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

// Priority weight
function getWeight(type) {
  switch (type.toLowerCase()) {
    case "placement":
      return 3;
    case "result":
      return 2;
    case "event":
      return 1;
    default:
      return 0;
  }
}

// Score = weight + recency
function computeScore(notification) {
  const weight = getWeight(notification.Type);

  const time = new Date(notification.Timestamp).getTime();
  const now = Date.now();

  // recency boost
  const recency = 1 / ((now - time) / 1000000 + 1);

  return weight * 10 + recency;
}

async function getTop10() {
  try {
    const res = await axios.get(API_URL);
    let notifications = res.data.notifications;

    // Remove duplicates by ID (VERY IMPORTANT — your data has duplicates)
    const uniqueMap = new Map();

    notifications.forEach((