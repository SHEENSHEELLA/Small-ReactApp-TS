import React, { useEffect, useRef, useState } from 'react'
import TodoList from './TodoList'

import { ITodo } from '../types/data'
import { Box, Button, Container, TextField } from '@mui/material'

const App: React.FC = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const addTodo = () => {
    if (value) {
      setTodos([...todos, { id: Date.now(), title: value, complete: false }])
      setValue('')
    }
  }

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo
        }
        return {
          ...todo,
          complete: !todo.complete,
        }
      })
    )
  }

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  return (
    <Container
      maxWidth="md"
      sx={{
        margin: '40px',
        // padding: '30px',
        // border: '1px solid black',
      }}
    >
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <TextField
          value={value}
          size="small"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          sx={{ flexGrow: 1 / 3, mr: 2 }}
        />
        <Button variant="contained" onClick={addTodo}>
          Add
        </Button>
      </Box>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </Container>
  )
}

export default App
