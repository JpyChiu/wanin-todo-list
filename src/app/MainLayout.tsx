import { useState } from 'react'
import { Container, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material'
import Delete from '@mui/icons-material/Delete'

import { useDeleteTodoListMutation, useGetTodoListQuery } from '../generated/graphql'
import AddTodo from './AddTodo'
import BaseList from '../common/BaseList'
import BaseDialog from '../common/BaseDialog'

function MainLayout() {
  const { data, loading, error, refetch } = useGetTodoListQuery()
  const [deletePopUp, setDeletePopUp] = useState<boolean>(false)
  const [deleteId, setDeleteId] = useState<number | null>(null)
  const [deleteTodoList, res] = useDeleteTodoListMutation()
  console.log(res)

  const onDeletePopUpOpen = (id: number) => {
    setDeletePopUp(true)
    setDeleteId(id)
  }

  const onDeletePopUpClose = async (id: number | null) => {
    if (id) {
      await deleteTodoList({
        variables: { id },
        update: cache => {
          console.log(cache)
        },
      })
    }
    setDeletePopUp(false)
    refetch()
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

  if (loading) return <div>Loading</div>
  if (error) return <div>Something goes wrong</div>
  if (!data?.todo_list) return <div>no todo</div>

  return (
    <Container maxWidth="md">
      <AddTodo refetch={refetch} />
      <BaseList header="Todos">
        {data.todo_list.map((todo, index) => (
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
      <BaseDialog enable={deletePopUp} message="Are you sure to delete?" onClose={() => onDeletePopUpClose(deleteId)} />
    </Container>
  )
}

export default MainLayout
