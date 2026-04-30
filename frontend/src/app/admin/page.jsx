import TaskTable from "@/components/task/TaskTable";
import useTasks from "../../features/tasks/useTasks";
console.log("Admin page loaded");
function AdminPage() {
  console.log("page loaded");

  const { tasks } = useTasks();

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <TaskTable tasks={tasks} showUser={true} />
    </div>
  );
}

export default AdminPage;