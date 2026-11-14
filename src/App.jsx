import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskFilter from './components/TaskFilter'
import TaskList from './components/TaskList'
import TaskStats from './components/TaskStats'

const STORAGE_KEY = 'mi-todo-app-tasks'

function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export default function App() {
  const [tasks, setTasks] = useState(loadTasks)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false }
    setTasks((prev) => [...prev, newTask])
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const pendingCount = tasks.filter((task) => !task.completed).length

  return (
    <main className="app">
      <table className="main-table">
        <tbody>
          <tr>
            <td className="title-cell">
              <h1>Mis tareas</h1>
            </td>
          </tr>
          <tr>
            <td>
              <TaskForm onAdd={addTask} />
            </td>
          </tr>
          <tr>
            <td className="center-cell">
              <TaskFilter current={filter} onChange={setFilter} />
            </td>
          </tr>
          <tr>
            <td>
              <TaskList
                tasks={filteredTasks}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            </td>
          </tr>
          <tr>
            <td className="center-cell">
              <TaskStats pending={pendingCount} />
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
