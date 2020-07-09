import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
      addTodo: state => ["TEST"]
    }
  });

export const { addTodo } = todoSlice.actions;

export const selectTodos = state => state.todos

export const todoReducer =  todoSlice.reducer;
