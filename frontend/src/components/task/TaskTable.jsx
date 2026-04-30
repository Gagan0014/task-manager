function TaskTable({ tasks, showUser }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Title</th>
            <th className="p-2">Description</th>
            {showUser && <th className="p-2">User</th>}
          </tr>
        </thead>

        <tbody>
          {Array.isArray(tasks) && tasks.map((task) => (
            <tr key={task._id} className="border-t">
              <td className="p-2">{task.title}</td>
              <td className="p-2">{task.description}</td>

              {showUser && (
                <td className="p-2">{task.user?.name}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;