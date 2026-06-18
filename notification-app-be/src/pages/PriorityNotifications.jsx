import React, { useEffect, useState } from "react";
import { getNotifications } from "../api/notifications";
import NotificationCard from "../components/NotificationCard";
import { computeScore } from "../utils/priority";

const PriorityNotifications = () => {
  const [top, setTop] = useState([]);

  useEffect(() => {
    fetchPriority();
  }, []);

  const fetchPriority = async () => {
    const res = await getNotifications(1, 100);

    const data = res.data.notifications || res.data;

    const scored = data
      .map((n) => ({
        ...n,
        score: computeScore(n),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    setTop(scored);
  };

  return (
    <div>
      <h2>Priority Notifications</h2>

      {top.map((n) => (
        <NotificationCard
          key={n.ID}
          data={n}
          viewed={false}
        />
      ))}
    </div>
  );
};

export default PriorityNotifications;