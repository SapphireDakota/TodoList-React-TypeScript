import React, { useRef } from "react";
import './TodoForm.css'

interface ITodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<ITodoFormProps> = props => {
    const ref = useRef<HTMLInputElement>(null);
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = '';
        }
    }
    
    return (
        <div className="input-field">
            <label htmlFor="title" className="active">Enter please the name of your case</label>
            <input
                // onChange={changeHandler}
                onKeyDown={keyPressHandler}
                // value={title}
                ref={ref}
                type="text"
                id="title"
                placeholder="Name of caseS"
            />
        </div>
    )
}