import Header from './components/Header.jsx'
import TaskList from './components/TaskList.jsx'
import TaskSummary from './components/TaskSummary.jsx'
import './App.css'

function App() {
  const tasks = [
    { id: 1, name: 'ללמוד ריאקט', status: 'הושלם' },
    { id: 2, name: 'לכתוב את המשימה', status: 'הושלם' },
    { id: 3, name: 'לבדוק את הקוד', status: 'בתהליך' },
    { id: 4, name: 'לשמור את השינויים', status: 'לא התחיל' },
  ]

  return (
    <section>
      <Header username="תלמיד" />
      <h2>רשימת המשימות</h2>
      <TaskList tasks={tasks} />
      <TaskSummary tasks={tasks} />
    </section>
  )
}

export default App
