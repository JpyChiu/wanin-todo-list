import React from 'react'
import { useQuery } from '@apollo/client'

import { GET_TODO_LIST } from './graphql/Query'

interface Todo {
  id: number
  task: string
  assignee: string
}

interface TodoList {
  todo_list: Todo[]
}

function App() {
  const { data } = useQuery<TodoList>(GET_TODO_LIST)

  if (!data) return <div>Loading</div>

  return (
    <>
      {data.todo_list.map(todo => (
        <div>
          <div>Id: {todo.id}</div>
          <div>Task: {todo.task}</div>
          <div>Assignee: {todo.assignee}</div>
        </div>
      ))}
    </>
  )
}

export default App
