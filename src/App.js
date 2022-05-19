import { useState } from 'react';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text:'Todo1',
      isDone: false
    },
    {
      id: 2,
      text:'Todo2',
      isDone: false
    }
  ])
  return (
    <div className="App">
      <TodoInput onAdd={(text) => {
        setTodos([
          ...todos,
         {
           id: [todos.length-1]+1,
           text: text,
           isDone: false
         }
        ])
      }}/>
     <TodoList todos={todos}
     delateTodo={(todo) => {
       setTodos(todos.filter(el => el.id !== todo.id))
       
     }}
     doneTodo={(todo) => {
       setTodos(
         todos.map((el) => {
           if(el.id === todo.id){
             return{
               ...el, isDone: !todo.isDone
             }
           }
           return el
         })
       )
     }}
     />
    </div>
  );
}

export default App;
