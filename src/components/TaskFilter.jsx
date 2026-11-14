const FILTERS = [
  { value: 'all', label: 'Todas' },
  { value: 'active', label: 'Pendientes' },
  { value: 'completed', label: 'Completadas' },
]

export default function TaskFilter({ current, onChange }) {
  return (
    <div className="task-filter">
      {FILTERS.map((item) => (
        <button
          key={item.value}
          type="button"
          className={`btn btn-filter ${current === item.value ? 'active' : ''}`}
          onClick={() => onChange(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
