import React, { useState } from "react";

export default function addToDo() {
    return (
        <><input type="text" placeholder='Type a new todo' class="ml-10 placeholder:pl-3 placeholder:text-sm">
        </input><button>
                Add todo
            </button></>
    );
}