import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

export const Todos = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [editId, setEditId] = useState(null)         // track the todo being edited
  const [editText, setEditText] = useState('')       // track text for editing

  const handleEdit = (todo) => {
    setEditId(todo.id)
    setEditText(todo.text)
  }

  const handleUpdate = (id) => {
    if (editText.trim() !== '') {
      dispatch(updateTodo({ id, text: editText }))
      setEditId(null)
      setEditText('')
    }
  }

  return (
    <>
      <div className="text-white text-xl font-bold mb-4">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="text-black px-2 py-1 rounded mr-2"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleUpdate(todo.id)}
                    className="text-white bg-blue-500 px-3 py-1 rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => setEditId(null)}
                    className="text-white bg-gray-500 px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="text-white">{todo.text}</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(todo)}
                    className="text-white bg-yellow-500 px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 px-3 py-1 rounded"
                  >
                    🗑
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
