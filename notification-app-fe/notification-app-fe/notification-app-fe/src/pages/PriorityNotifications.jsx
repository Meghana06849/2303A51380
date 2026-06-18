import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";
import NotificationCard from "../components/NotificationCard";

const getWeight = (type) => {
  if (type === "Placement") return 3;
  if (type === "Result") return 2;
  return 1;
};

const score = (n) => {
  const weight = getWeight(n.type);
  const time = new Date(n.createdAt).getTime();
  return weight * 10 + time /