import { useState, useCallback } from 'react'
import { Button } from '@mui/material'

import BaseInput from '../common/BaseInput'
import { useInsertTodoListMutation } from '../generated/graphql'

type Props = {
  refetch: () => void
}

function AddTodo(props: Props) {
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
    props.refetch()
  }

  return (
    <>
      <BaseInput placeholder="input task.." label="Create Todo" onChange={handleTaskChange} value={task} />
      <BaseInput placeholder="input assignee.." onChange={handleAssigneeChange} value={assignee} />
      <Button onClick={handleSubmitClick} color="primary" variant="outlined">
        Submit
      </Button>
    </>
  )
}

export default AddTodo
