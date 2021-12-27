import { TextField, TextFieldProps } from '@mui/material'

function BaseInput(props: TextFieldProps) {
  return (
    <TextField
      style={{ marginTop: 20 }}
      fullWidth
      variant="outlined"
      {...props}
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}

export default BaseInput
