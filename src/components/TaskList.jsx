function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.name} — {task.status}
        </li>
      ))}
    </ul>
  )
}

export default TaskList
