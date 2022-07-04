import { useState } from 'react'
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material'
import Delete from '@mui/icons-material/Delete'

import BaseList from '../common/BaseList'
import { Maybe, Todo_List } from '../generated/graphql'
import DeleteTodo from './DeleteTodo'
import UpdateTodo from './UpdateTodo'

type Props = {
  todos: Array<Todo_List>
}

enum PopUpType {
  Delete = 'delete',
  Update = 'update',
  Non = 'non',
}

function TodoList(props: Props) {
  const { todos } = props
  const [popUpType, setPopUpType] = useState<PopUpType>(PopUpType.Non)
  const [targetId, setTargetId] = useState<number | null>(null)

  const enablePopUp = (target: PopUpType) => {
    if (target === popUpType) {
      return true
    }
    return false
  }

  const onUpdateDialogOpen = (id: number) => {
    setPopUpType(PopUpType.Update)
    setTargetId(id)
  }

  const onDeletePopUpOpen = (id: number) => {
    setPopUpType(PopUpType.Delete)
    setTargetId(id)
  }

  const backgroundTransition = (index: number) => {
    if (index % 2 === 0) {
      return { background: '#e8e8e8' }
    }
    return undefined
  }

  const concatNameTodo = (assignee: Maybe<string> | undefined, task: string) => {
    const name = assignee ? assignee : 'No name'
    return `${name}: ${task}`
  }

  return (
    <>
      <BaseList header="Todos">
        {todos.map((todo, index) => (
          <div key={`${index}`} style={backgroundTransition(index)}>
            <ListItem id={`${index}`} key={todo.id} button onClick={() => onUpdateDialogOpen(todo.id)}>
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
      <DeleteTodo enable={enablePopUp(PopUpType.Delete)} id={targetId} onClose={() => setPopUpType(PopUpType.Non)} />
      <UpdateTodo enable={enablePopUp(PopUpType.Update)} id={targetId} onClose={() => setPopUpType(PopUpType.Non)} />
    </>
  )
}

export default TodoList
