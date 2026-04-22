import { useState } from "react";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
  }

  if (!token) {
    return <Auth setToken={setToken} />;
  }

  return <Dashboard token={token} onLogout={logout} />;
}

export default App;