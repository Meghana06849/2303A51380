import axios from "axios";

const BASE_URL = "http://localhost:5000/notifications";

export const fetchNotifications = (page = 1, limit = 10, type = "") => {
  return axios.get(BASE_URL, {
    params: {
      page,
      limit,
      notification_type: type || undefined,
    },
  });
};