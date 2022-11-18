import React, { useState } from "react";

export default function TodoList() {
    const initialTodos = [{
        text: "my first todo",
        check: false},{
        text: "my second todo",
        check: false}];
    const [todos, setTodos] = useState(initialTodos);
    return (
        <ul className="ml-10 text-base">
            {todos.map((todo, index) => (
                <li key={index} className="pb-5 hover:italic hover:cursor-pointer">
                    <input type="checkbox" defaultChecked={todo.check}  className="ml-10 hover:cursor-pointer" /> {todo.text}
                </li>
            ))}
        </ul>
    );}