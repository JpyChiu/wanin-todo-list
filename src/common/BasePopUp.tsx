import React, { ReactNode, useCallback } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

export interface DialogProps {
  enable: boolean
  children: ReactNode
  onClose: () => void
  action: () => void
}

function BasePopUp(props: React.PropsWithChildren<DialogProps>) {
  const { enable, onClose, children, action } = props

  const onOk = useCallback(() => {
    action()
    onClose()
  }, [action, onClose])

  return (
    <Dialog fullWidth={true} open={enable} onClose={onClose}>
      <DialogTitle id="alert-dialog-title" />
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onOk} color="primary" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default BasePopUp
