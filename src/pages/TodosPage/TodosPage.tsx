import React, { useState, useEffect } from "react";
import { TodoForm } from "../../components/TodoForm/TodoForm";
import { TodoList } from "../../components/TodoList/TodoList";
import { ITodo } from "../../interfaces";

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]),
      addHandler = (title: string) => {
        const newTodo: ITodo = {
          title,
          id: Date.now(),
          completed: false
        };
        setTodos(prev => [newTodo, ...prev]);
      };
    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
      setTodos(saved)
    }, [])
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    const toggleHandler = (id: number) => {
      setTodos(prev => prev.map(todo => {
        if (todo.id === id) {todo.completed = !todo.completed;}
        return todo;
      }))
    },
    removeHandler = (id: number) => {
      const shouldRemove = window.confirm('Are you sure about it?')
      shouldRemove &&
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  return (
    <React.Fragment>
      <TodoForm onAdd={addHandler} />
      <TodoList {...{ todos, toggleHandler, removeHandler }} />
    </React.Fragment>
  );
};
