export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <tr
      className={`task-row ${task.completed ? 'completed' : ''}`}
      onClick={() => onToggle(task.id)}
    >
      <td className="col-check">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          onClick={(event) => event.stopPropagation()}
        />
      </td>
      <td className="task-text">{task.text}</td>
      <td className="col-action">
        <button
          type="button"
          className="btn btn-delete"
          onClick={(event) => {
            event.stopPropagation()
            onDelete(task.id)
          }}
        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}
