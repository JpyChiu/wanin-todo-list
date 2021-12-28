import { useCallback, useState } from 'react'
import BaseInput from '../common/BaseInput'
import BasePopUp from '../common/BasePopUp'
import { useUpdateTodoListMutation } from '../generated/graphql'

type Props = {
  enable: boolean
  id: number | null
  onClose: () => void
}

function UpdateTodo(props: Props) {
  const { enable, id, onClose } = props
  const [task, setTask] = useState<string>('')
  const [updateTodoList] = useUpdateTodoListMutation()

  const handleTaskChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setTask(value)
    },
    [setTask],
  )

  const updateTodo = async () => {
    if (id) {
      await updateTodoList({
        variables: { id, task },
      })
    }
  }

  return (
    <BasePopUp enable={enable} onClose={onClose} action={updateTodo}>
      <p>Update task</p>
      <BaseInput placeholder="update task.." label="Update Todo" onChange={handleTaskChange} value={task} />
    </BasePopUp>
  )
}

export default UpdateTodo
