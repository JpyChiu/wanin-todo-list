import { Container, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material'
import Delete from '@mui/icons-material/Delete'

import { useGetTodoListQuery } from '../generated/graphql'
import AddTodo from './AddTodo'
import BaseList from '../common/BaseList'

function MainLayout() {
  const { data, loading, error, refetch } = useGetTodoListQuery()

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
              <ListItemSecondaryAction data-post-id={todo.id} onClick={() => {}}>
                <IconButton edge="end" aria-label="delete">
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </div>
        ))}
      </BaseList>
    </Container>
  )
}

export default MainLayout
