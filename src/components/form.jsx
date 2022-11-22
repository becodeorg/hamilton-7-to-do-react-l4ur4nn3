import React, { useRef } from "react";

export default function Form(props) {
    const inputRef = useRef();

    function clickHandler(){

//     let inputValue = document.getElementById("textInput1").value;
//     document.getElementById("output").innerHTML = inputValue;
        
//     //const inputElement = inputRef.current;

//     //const inputRef = useRef();

    
//     //    console.log(imputElement.value);
//     }

//     return (
//         <><>
//             <label for="textInput1">Input :</label>
//             <input id="textInput1" 
//             //ref={inputRef} 
//             type="text" placeholder='type a new todo...' className="ml-10 p-2 rounded-md placeholder:pl-3 placeholder:text-sm">
//             </input><button onClick={clickHandler} className="ml-5 p-2 rounded-md bg-slate-100 lowercase hover:bg-zinc-400 hover:text-white">
//                 Add todo
//             </button></><p id="output"></p></>
//    );
    const inputElement = inputRef.current
        if(inputElement.value == '') {
            alert("Empty entry");
        }else {
            props.addTodo(inputElement.value)
            inputElement.value = '';
        }
    }
    function enterHandler(e) {
        if(e.key === "Enter") {
            const inputElement = inputRef.current
            if(inputElement.value == '') {
                alert("Empty entry");
            }else {
                props.addTodo(inputElement.value)
                inputElement.value = '';
            }
        }
    }
    return (
        <div className="w-full text-left ml-5">
            <input ref={inputRef} type="text" placeholder="type a new todo..." className="border p-1 pl-2 rounded-md w-1/2" onKeyUp={enterHandler}></input>
            <button className="ml-5 mt-5 p-2 rounded-md bg-slate-100 lowercase hover:bg-zinc-400 hover:text-white" onClick={clickHandler}>Add task</button>
        </div>
    )
}