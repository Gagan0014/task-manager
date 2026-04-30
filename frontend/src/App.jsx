import { Routes, Route } from "react-router-dom";

import Login from "./app/login/page.jsx";
import Tasks from "./app/tasks/page.jsx";
import Admin from "./app/admin/page.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;