export function TodoItem ({todo, delateTodo,doneTodo,isDone}) {
    return(
        <div>
            <li className={isDone ? 'done' : 'undone'}>{todo.text}</li>
            
            <button onClick={() => delateTodo(todo)}>x</button>
            <button onClick={() => doneTodo(todo)}>{!isDone ? 'done' : 'undone'}</button>
        </div>
    )
}