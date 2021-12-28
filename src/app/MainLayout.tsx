import { Box, Container } from '@mui/material'

import { useFetchTodoListSubscription } from '../generated/graphql'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

function MainLayout() {
  const { data, loading, error } = useFetchTodoListSubscription()

  if (loading) return <div>Loading</div>
  if (error) return <div>Something goes wrong</div>
  if (!data?.todo_list) return <div>no todo</div>

  return (
    <Container maxWidth="md">
      <Box sx={{ flex: 0, width: '100%' }}>
        <AddTodo />
      </Box>
      <Box sx={{ flex: 1, width: '100%' }}>
        <TodoList todos={data.todo_list} />
      </Box>
    </Container>
  )
}

export default MainLayout
