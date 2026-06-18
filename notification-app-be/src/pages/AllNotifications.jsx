import React, { useEffect, useState } from "react";
import { getNotifications } from "../api/notifications";
import NotificationCard from "../components/NotificationCard";
import { logger } from "../utils/logger";

const AllNotifications = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      logger.info("Fetching notifications");

      const res = await getNotifications(page, 10);
      setData(res.data.notifications || res.data);

      logger.info("Fetched successfully");
    } catch (err) {
      logger.error("Fetch failed", err);
    }
  };

  return (
    <div>
      <h2>All Notifications</h2>

      {data.map((n) => (
        <NotificationCard
          key={n.ID}
          data={n}
          viewed={false}
        />
      ))}

      <button onClick={() => setPage(page + 1)}>
        Next Page
      </button>
    </div>
  );
};

export default AllNotifications;