import React, { useState } from 'react';
import { v4 as randomId } from "uuid";
import './App.css';
import ToDo from './components/todo';
import Form from './components/form';
//import { useState } from 'react';

let locStorage = 'toDoApp';

// function App() {
//   return (
//     <div className="App bg-pink-300 text-left pt-10 pb-10">
//         <h1 className="ml-10 mb-10 text-2xl uppercase">
//         My Todo App <i className="fa-sharp fa-solid fa-heart-circle-check text-white"></i>
//         </h1>
//         <Button />
//         <hr className="mt-5 text-white" />
//         <h2 className="ml-10 mt-10 mb-10 text-xl uppercase">
//           Todos <i className="fa-solid fa-ellipsis text-white"></i>
//         </h2>
//         <Checkbox />
//     </div>
//     );
// };


export default function App(){
  let initialTodo = [];
  const [Todo, setTodo] = useState(() => {
    initialTodo = JSON.parse(localStorage.getItem(locStorage + ".todos"));
    return initialTodo || []
  });
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([])
  const filterHandler = () => { 
    switch(status){
      case 'Done':
        setFilteredTodos(Todo.filter(todo => todo.done === true))
        break;
      case 'NotDone':
        setFilteredTodos(Todo.filter(todo => todo.done === false))
        break;
      default:
        setFilteredTodos(Todo)
    }
  }
  const addTodo = (data) => {
    const newTodo = [...Todo]
    newTodo.push({title: data, done: false, id: randomId()})
    setTodo(newTodo);
  };

  React.useEffect(() => {
    window.localStorage.setItem(locStorage + ".todos", JSON.stringify(Todo));
  },[Todo]);
return (
  <div className="App w-1/2 text-left -screen flex flex-col justify-start pt-10 pb-10">
    <h1 className="ml-10 mb-10 text-2xl uppercase">
        My Todo App <i className="fa-sharp fa-solid fa-heart-circle-check text-white"></i>
        </h1>
    <div className="mt-5 ml-5 flex justify-center align-center flex-col">
      <Form addTodo={addTodo}/>
      <hr className="mt-5 text-white" />
      <h2 className="ml-5 mt-10 text-xl uppercase">
          Todos <i className="fa-solid fa-ellipsis text-white"></i>
        </h2>
    </div>
    <div className="App text-left -screen w-1/2 flex flex-col justify-start pt-10 pb-10">
      <ToDo todo={Todo}/>
    </div>
  </div>
)}
