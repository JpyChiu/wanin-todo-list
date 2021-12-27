import { DataGrid } from '@mui/x-data-grid'

import { useGetTodoListQuery } from '../generated/graphql'

const columns = [
  { field: 'task', headerName: 'Task', width: 130 },
  { field: 'assignee', headerName: 'Assignee', width: 130 },
  { field: 'created_at', headerName: 'Created At', width: 130 },
]

function MainLayout() {
  const { data, loading, error } = useGetTodoListQuery()

  if (loading) return <div>Loading</div>
  if (error) return <div>Something goes wrong</div>
  if (!data?.todo_list) return <div>no todo</div>

  const todoRows = data.todo_list.map(todo => ({
    id: todo.id,
    task: todo.task,
    assignee: todo.assignee,
    created_at: todo.created_at,
    updated_at: todo.updated_at,
  }))

  return (
    <div style={{ height: '70vh', width: '100%' }}>
      <DataGrid
        rows={todoRows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50, 100]}
        checkboxSelection
      />
    </div>
    // <div>123</div>
  )
}

export default MainLayout
