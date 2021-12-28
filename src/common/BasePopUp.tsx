import React, { useCallback } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

export interface DialogProps {
  enable: boolean
  message: string
  onClose: () => void
  action: () => void
}

function BasePopUp(props: React.PropsWithChildren<DialogProps>) {
  const { enable, onClose, message, action } = props

  const onOk = useCallback(() => {
    action()
    onClose()
  }, [action, onClose])

  return (
    <Dialog fullWidth={true} open={enable} onClose={onClose}>
      <DialogTitle id="alert-dialog-title" />
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{`${message}`}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onOk} color="primary" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default BasePopUp
