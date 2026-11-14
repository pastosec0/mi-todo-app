import { useState } from 'react'

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const clean = text.trim()
    if (!clean) return
    onAdd(clean)
    setText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="¿Qué tienes que hacer?"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit" className="btn btn-add">
        Agregar
      </button>
    </form>
  )
}
