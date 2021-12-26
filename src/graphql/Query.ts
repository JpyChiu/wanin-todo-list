import { gql } from '@apollo/client'

export const GET_TODO_LIST = gql`
  {
    todo_list {
      id
      task
      assignee
    }
  }
`
