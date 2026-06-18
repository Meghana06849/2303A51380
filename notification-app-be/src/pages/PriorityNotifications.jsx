import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";
import { score } from "../utils/priority";
import NotificationCard from "../components/NotificationCard";

export default function PriorityNotifications() {
  const [top, setTop] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await fetchNotifications(1, 100);

    const sorted = res.data.notifications
      .map((n) => ({ ...n, score: score(n) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    setTop(sorted);
  };

  return (
    <div>
      <h2>Priority Notifications</h2>
      {top.map((n, i) => (
        <NotificationCard key={i} data={n} />
      ))}
    </div>
  );
}