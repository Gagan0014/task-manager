import { useEffect, useState } from "react";

function Dashboard({ token, onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const API = "http://localhost:5000/api/task";

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    const res = await fetch(API, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setTasks(data.data || []);
  }

  async function createTask() {
    if (!title.trim()) return alert("Title required");

    const res = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title }),
    });

    const data = await res.json();
    if (data.success) {
      setTitle("");
      fetchTasks();
    } else {
      alert(data.message);
    }
  }

  async function deleteTask(id) {
    const res = await fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    if (data.success) {
      fetchTasks();
    } else {
      alert(data.message);
    }
  }

  return (
  <div className="container">
    <h2 style={{ textAlign: "center" }}>Dashboard</h2>

    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
      <button onClick={onLogout}>Logout</button>
    </div>

    <div style={{ display: "flex", gap: "10px" }}>
      <input
        placeholder="New Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={createTask}>Add</button>
    </div>

    <div style={{ marginTop: "20px" }}>
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        tasks.map((t) => (
          <div key={t._id} className="task">
            <span>{t.title}</span>
            <button onClick={() => deleteTask(t._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  </div>
);
}

export default Dashboard;