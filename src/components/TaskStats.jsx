export default function TaskStats({ pending }) {
  return (
    <footer className="task-stats">
      {pending === 1
        ? 'Te queda 1 tarea pendiente'
        : `Te quedan ${pending} tareas pendientes`}
    </footer>
  )
}
