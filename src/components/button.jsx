import React, { useState } from "react";

export default function addToDo() {
    return (
        <><input type="text" placeholder='type a new todo...' className="ml-10 p-2 rounded-md placeholder:pl-3 placeholder:text-sm">
        </input><button className="ml-5 p-2 rounded-md bg-slate-100 lowercase hover:bg-zinc-400 hover:text-white">
                Add todo
            </button></>
    );
}