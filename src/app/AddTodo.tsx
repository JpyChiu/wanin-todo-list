import { useState, useCallback } from 'react'
import { Box, Button } from '@mui/material'

import BaseInput from '../common/BaseInput'
import { useInsertTodoListMutation } from '../generated/graphql'

function AddTodo() {
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
  }

  return (
    <Box sx={{ flex: 0, width: '100%' }}>
      <BaseInput placeholder="input task.." label="Create Todo" onChange={handleTaskChange} value={task} />
      <BaseInput placeholder="input assignee.." onChange={handleAssigneeChange} value={assignee} />
      <Button onClick={handleSubmitClick} color="primary" variant="outlined">
        Submit
      </Button>
    </Box>
  )
}

export default AddTodo
