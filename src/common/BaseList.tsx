import { ReactNode } from 'react'
import { Box, List, ListSubheader } from '@mui/material'

type Props = {
  header: string
  children: ReactNode
}

function BaseList(props: Props) {
  const { header, children } = props
  return (
    <Box border={1} borderRadius="borderRadius" borderColor="black" style={{ marginTop: 10 }}>
      <List
        component="nav"
        aria-label="contacts"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {header}
          </ListSubheader>
        }
      >
        {children}
      </List>
    </Box>
  )
}

export default BaseList
