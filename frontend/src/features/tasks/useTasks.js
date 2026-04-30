import { useEffect, useState } from "react";
import { getAllTasks } from "@/services/taskService";
console.log("🔥 HOOK INITIALIZED");
export default function useTasks() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await getAllTasks(); 
        console.log("🔥 THIS FILE IS RUNNING");
      console.log("ADMIN TASKS:", res.data);

      setTasks(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return { tasks, fetchTasks };
}