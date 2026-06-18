import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";
import NotificationCard from "../components/NotificationCard";

export default function AllNotifications() {
  const [data, setData] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    load();
  }, [type]);

  const load = async () => {
    const res = await fetchNotifications(1, 10, type);
    setData(res.data.notifications);
  };

  return (
    <div>
      <h2>All Notifications</h2>

      <select onChange={(e) => setType(e.target.value)}>
        <option value="">All</option>
        <option value="Event">Event</option>
        <option value="Result">Result</option>
        <option value="Placement">Placement</option>
      </select>

      {data.map((n) => (
        <NotificationCard key={n._id || n.id} data={n} />
      ))}
    </div>
  );
}