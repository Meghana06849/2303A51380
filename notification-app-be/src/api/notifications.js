import axios from "axios";

const BASE_URL =
  "http://4.224.186.213/evaluation-service/notifications";

// Fetch all notifications
export const getNotifications = (page = 1, limit = 10, type = "") => {
  return axios.get(BASE_URL, {
    params: {
      page,
      limit,
      notification_type: type || undefined,
    },
  });
};