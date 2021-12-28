import { DialogContentText } from '@mui/material'

import BasePopUp from '../common/BasePopUp'
import { useDeleteTodoListMutation } from '../generated/graphql'

type Props = {
  enable: boolean
  id: number | null
  onClose: () => void
}

function DeleteTodo(props: Props) {
  const { enable, id, onClose } = props
  const [deleteTodoList] = useDeleteTodoListMutation()

  const deleteTodo = async () => {
    if (id) {
      await deleteTodoList({
        variables: { id },
      })
    }
  }

  return (
    <BasePopUp enable={enable} onClose={onClose} action={deleteTodo}>
      <DialogContentText id="alert-dialog-description">Are you sure to delete?</DialogContentText>
    </BasePopUp>
  )
}

export default DeleteTodo
