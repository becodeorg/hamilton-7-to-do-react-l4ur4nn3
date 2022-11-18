import React, { useState } from "react";

export default function TodoList() {
    const initialTodos = [{
        text: "My first todo",
        check: false},{
        text: "My second todo",
        check: false}];
    const [todos, setTodos] = useState(initialTodos);
    return (
        <ul className="ml-5 text-base">
            {todos.map((todo, index) => (
                <li key={index}>
                    <input type="checkbox" defaultChecked={todo.check}  className="ml-5" /> {todo.text}
                </li>
            ))}
        </ul>
    );}