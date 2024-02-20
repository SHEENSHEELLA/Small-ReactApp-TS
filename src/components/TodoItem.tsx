import { Box, Checkbox, FormGroup, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { ITodo } from '../types/data'

interface ITodoItem extends ITodo {
  toggleTodo: (id: number) => void
  removeTodo: (id: number) => void
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, toggleTodo, removeTodo } = props
  return (
    <Box sx={{ height: '100%', display: 'flex', justifyContent: 'flex-start' }}>
      <Checkbox
        // type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      <Typography
        variant="h6"
        component="span"
        sx={{
          display: 'inline-block',
          margin: 'auto 10px',
          alignItems: 'center',
          color: '#1976d2',
        }}
      >
        {title}
      </Typography>
      <IconButton color="error" onClick={() => removeTodo(id)}>
        {/* style={{
          background: 'transparent',
          border: 'none',
          outline: 'none',
          color: 'red',
        }}
      > */}
        {/* x */}
        <CloseIcon />
      </IconButton>
    </Box>
  )
}

export default TodoItem
