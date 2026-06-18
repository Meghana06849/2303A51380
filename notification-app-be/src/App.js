import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllNotifications from "./pages/Notificationcard";
import PriorityNotifications from "./pages/PriorityNotifications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllNotifications />} />
        <Route path="/priority" element={<PriorityNotifications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;