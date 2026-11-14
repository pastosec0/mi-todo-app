import TaskItem from './TaskItem'

export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <table className="task-table">
      <thead>
        <tr>
          <th className="col-check">Hecho</th>
          <th>Tarea</th>
          <th className="col-action">Acción</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length === 0 ? (
          <tr>
            <td colSpan="3" className="empty">
              No hay tareas para mostrar
            </td>
          </tr>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        )}
      </tbody>
    </table>
  )
}
