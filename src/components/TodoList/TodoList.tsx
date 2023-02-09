import React from "react";
import { ITodo } from "../../interfaces";
import './TodoList.css'

type TodoListProps = {
    todos: ITodo[]
    toggleHandler(id: number): void
    removeHandler(id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({todos,removeHandler,toggleHandler}) => {
    if(todos.length === 0) {
        return <p className="center">No cases right now</p>
    }

    const remove = (event: React.MouseEvent, id:number) => {
        event.preventDefault();
        removeHandler(id);
    }

    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if(todo.completed) {
                    classes.push('completed')
                }
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed} onChange={toggleHandler.bind(null,todo.id)} />
                            <span>{todo.title}</span>
                            <i className="material-icons red-text" onClick={event => remove(event,todo.id)}>delete</i>
                        </label>
                    </li>
                )
            })}
            
        </ul>
    )
}