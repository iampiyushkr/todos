import { useState } from "react"
import {v4 as uuid} from "uuid"

export function TodosInput({addTodos}) {
    const [text, setText] = useState("");
    return <form onSubmit={(e)=>e.preventDefault()}>
        <input value={text} type="text" placeholder="List" onChange={(e) => setText(e.target.value)} />
        <button onClick={() => {
            const payload = {
                Title: text ,
                id:uuid(),
                status: Math.random()<0.4,
                color:"black"
            };
            addTodos(payload)
            setText("")
        } }>Add Todos</button>
    </form>
}