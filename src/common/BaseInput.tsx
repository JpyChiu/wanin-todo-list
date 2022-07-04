import { TextField, TextFieldProps } from '@mui/material'

function BaseInput(props: TextFieldProps) {
  return (
    <TextField
      style={{ marginTop: 10, marginBottom: 10 }}
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
