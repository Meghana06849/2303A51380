import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";
import NotificationCard from "../components/NotificationCard";

export default function AllNotifications() {
  const [data, setData] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await fetchNotifications(1, 10, "");
    setData(res.data.notifications);
  };

  return (
    <div>
      <h2>All Notifications</h2>
      {data.map((n, i) => (
        <NotificationCard key={i} data={n} />
      ))}
    </div>
  );
}