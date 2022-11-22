// import React, { useState } from "react";

// export default function TodoList() {

//     const inputRef = useRef();
//     const [newItem, setNewItem] = useState("");
//     const initialTodos = [{
//         text: "my first todo",
//         check: false},{
//         text: "my second todo",
//         check: false}];

//     const [todos, setTodos] = useState(initialTodos);
//     return (
//         <ul className="ml-10 text-base">
//             {todos.map((todo, index) => (
//                 <li key={index} className="pb-5 hover:italic hover:cursor-pointer">
//                     <input ref={inputRef} type="checkbox" defaultChecked={todo.check} id="input_checkbox" className="ml-10 hover:cursor-pointer" /> {todo.text}

//                 </li>
//             ))}
//         </ul>

//     );}

import React, { useState } from "react";
export default function ToDo(props) {
    let toDo = props.todo;    
    let locStorage = 'toDoApp'
    const handleChange = (id) => {
        const newToDo = todos.map((todo) => {
            if (todo.id === id) {
                todo.done = !todo.done;
                console.log(todo.done)
            }
            return todo;
        });
        setTodos(newToDo)
    };

    const [todos, setTodos] = useState(toDo);

    React.useEffect(() => {
        setTodos(props.todo);
        window.localStorage.setItem(locStorage + ".todos", JSON.stringify(toDo))});
    

    return ( 
        <div className="flex flex-col">
            <ul className="ml-5">
                {todos.map((todo) => (
                <li key={todo.id}>
                    <input type="checkbox" id={todo.id} value={todo.done} checked={todo.done} onChange={() => {
                        handleChange(todo.id)
                    }} className="accent-blue-300 scale-[3] m-10"></input>
                    <label htmlFor={todo.id} className={`dark:text-white ml-5 text-xl ${todo.done?"line-through":"no-underline"}`}>{todo.title}</label>
                </li>
                ))}
            </ul>
            <div className={`flex w-full ml-12 gap-10 ${toDo.length === 0 ?"hidden":""}`}>
                <button className="mt-5 p-2 rounded-md bg-slate-100 lowercase hover:bg-zinc-400 hover:text-white" onClick={
                    () => {
                        if(window.confirm('Are you sure you want to continue ?\nThis action cannot be undone.')) {
                        window.localStorage.removeItem(locStorage + ".todos");
                        window.location.reload(false);
                        }
                }
                }>remove completed tasks</button> 
                <button className="mt-5 p-2 rounded-md bg-slate-100 lowercase hover:bg-zinc-400 hover:text-white" onClick={
                    () => {
                        if(window.confirm('Are you sure you want to continue ?\nThis action cannot be undone.')) {
                        window.localStorage.removeItem(locStorage + ".todos");
                        window.location.reload(false);
                        }
                }
                }>remove all</button>
            </div>
        </div>
    )
}