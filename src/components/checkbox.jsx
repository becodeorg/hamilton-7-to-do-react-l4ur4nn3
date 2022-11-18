import React, { useState } from "react";

export default function TodoList() {
    const initialTodos = ["My first todo", "My second todo"];
    const [todos, setTodos] = useState(initialTodos);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleChange = event => {
    if (event.target.checked) {
        console.log('✅ Checkbox is checked');
    } else {
        console.log('⛔️ Checkbox is NOT checked');
    }
    setIsSubscribed(current => !current);
};
    return (
        <ul class="ml-5 text-base">
            {todos.map((todo) => (
                <li>
                    <input type="checkbox" value={isSubscribed} onChange={handleChange} class="ml-5" /> {todo}
                </li>
            ))}
        </ul>
    );
}