import { useState, useCallback } from 'react'
import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  TextField,
} from '@mui/material'
import Delete from '@mui/icons-material/Delete'

import { useGetTodoListQuery, useInsertTodoListMutation } from '../generated/graphql'

function MainLayout() {
  const { data, loading, error, refetch } = useGetTodoListQuery()
  const [InsertTodoList] = useInsertTodoListMutation()
  const [task, setTask] = useState<string>('')
  const [assignee, setAssignee] = useState<string>('')

  const handleTaskChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setTask(value)
    },
    [setTask],
  )

  const handleAssigneeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setAssignee(value)
    },
    [setAssignee],
  )

  const handleSubmitClick = async () => {
    await InsertTodoList({ variables: { task, assignee } })
    setTask('')
    setAssignee('')
    refetch()
  }

  if (loading) return <div>Loading</div>
  if (error) return <div>Something goes wrong</div>
  if (!data?.todo_list) return <div>no todo</div>

  return (
    <Container maxWidth="md">
      <TextField
        id="standard-full-width"
        label="Create Todo"
        style={{ marginTop: 20 }}
        placeholder="input task.."
        fullWidth
        variant="outlined"
        onChange={handleTaskChange}
        value={task}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="standard-full-width"
        style={{ marginTop: 20 }}
        placeholder="input assignee.."
        fullWidth
        variant="outlined"
        onChange={handleAssigneeChange}
        value={assignee}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button onClick={handleSubmitClick} color="primary" variant="outlined" style={{ margin: 8 }}>
        Submit
      </Button>
      <Box border={1} borderRadius="borderRadius" borderColor="grey.400" style={{ marginTop: 10, padding: 2 }}>
        <List
          component="nav"
          aria-label="contacts"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Todos
            </ListSubheader>
          }
        >
          {data.todo_list.map((todo, index) => (
            <div key={`${index}`}>
              <ListItem id={`${index}`} key={todo.id} button onClick={() => {}}>
                <ListItemText
                  id={`${todo.id}`}
                  primary={
                    <p>
                      {todo.assignee ? todo.assignee : 'No name'}: {todo.task}
                    </p>
                  }
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
        </List>
      </Box>
    </Container>
  )
}

export default MainLayout
