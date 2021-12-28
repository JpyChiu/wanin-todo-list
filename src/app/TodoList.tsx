import { useState } from 'react'
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material'
import Delete from '@mui/icons-material/Delete'

import BaseList from '../common/BaseList'
import BasePopUp from '../common/BasePopUp'
import { Todo_List, useDeleteTodoListMutation } from '../generated/graphql'

type Props = {
  todos: Array<Todo_List>
}

function TodoList(props: Props) {
  const { todos } = props
  const [deletePopUp, setDeletePopUp] = useState<boolean>(false)
  const [deleteId, setDeleteId] = useState<number | null>(null)
  const [deleteTodoList] = useDeleteTodoListMutation()

  const onDeletePopUpOpen = (id: number) => {
    setDeletePopUp(true)
    setDeleteId(id)
  }

  const deleteTodo = async (id: number | null) => {
    if (id) {
      await deleteTodoList({
        variables: { id },
        update: cache => {
          console.log(cache)
        },
      })
    }
  }

  const backgroundTransition = (index: number) => {
    if (index % 2 === 0) {
      return { background: '#e8e8e8' }
    }
    return undefined
  }

  const concatNameTodo = (assignee: string | null | undefined, task: string) => {
    const name = assignee ? assignee : 'No name'
    return `${name}: ${task}`
  }

  return (
    <>
      <BaseList header="Todos">
        {todos.map((todo, index) => (
          <div key={`${index}`} style={backgroundTransition(index)}>
            <ListItem id={`${index}`} key={todo.id} button onClick={() => {}}>
              <ListItemText
                id={`${todo.id}`}
                primary={<p>{concatNameTodo(todo.assignee, todo.task)}</p>}
                secondary={new Date(todo.created_at).toUTCString()}
              />
              <ListItemSecondaryAction data-post-id={todo.id} onClick={() => onDeletePopUpOpen(todo.id)}>
                <IconButton edge="end" aria-label="delete">
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </div>
        ))}
      </BaseList>
      <BasePopUp
        enable={deletePopUp}
        message="Are you sure to delete?"
        onClose={() => setDeletePopUp(false)}
        action={() => deleteTodo(deleteId)}
      />
    </>
  )
}

export default TodoList
