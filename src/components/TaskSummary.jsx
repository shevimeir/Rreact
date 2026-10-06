function TaskSummary({ tasks }) {
  const total = tasks.length
  const done = tasks.filter((task) => task.status === 'הושלם').length

  return (
    <p>
      יש {total} משימות, מתוכן {done} הושלמו.
    </p>
  )
}

export default TaskSummary
