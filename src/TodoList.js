import { TodoItem } from "./TodoItem"

export function TodoList ({todos, delateTodo, doneTodo,}) {
    return(
        <div>
            {
                todos.map(el => {
                    return(
                        <TodoItem 
                        key={el.id}
                         todo={el}
                         delateTodo={delateTodo}
                         doneTodo={doneTodo}
                         isDone={el.isDone}
                         />
                    )
                })
            }
        </div>
    )
}