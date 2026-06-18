import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllNotifications from "./pages/AllNotifications";
import PriorityNotifications from "./pages/PriorityNotifications";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <h3>Notification System</h3>

        <div className="links">
          <Link to="/">All Notifications</Link>
          <Link to="/priority">Priority Inbox</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<AllNotifications />} />
        <Route path="/priority" element={<PriorityNotifications />} />
      </Routes>
    </BrowserRouter>
  );
}