import { useState } from "react"

export function TodoInput ({onAdd}){
    const[text, setText] = useState('')
    return(
        <div>
        <input type='text' value={text} onChange={(ev)=>{
            setText(ev.target.value)
        }} />
        <button onClick={(ev) => {
            ev.preventDefault();
            onAdd(text)
            setText('')
        }}>Add</button>
        </div>
    )
}
