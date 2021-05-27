import React from 'react';
import {AiOutlineCheckCircle} from "react-icons/ai";
import {BsTrash} from "react-icons/bs";
const Todo = ({todo,setTodos,todos}) => {
      const changeCompleted = () => {
          setTodos(todos.map((item)=>{
                  if(item.id === todo.id){
                      return {
                          ...item,
                          completed: !item.completed
                      }
                  }
                  else
                      return item;
              }));
      }
      const handleRemoveTodo = (id) =>{
          const newTodos = [...todos.filter(todo => todo.id !== id)];
          setTodos(newTodos);
      }

      return (
          <div className="todo">
              <li className={`todo-item ${todo.completed ? "completed-todo" : ""}`}>{todo.text}</li>
              <button onClick={changeCompleted}
                      className="complete-button">
                  <AiOutlineCheckCircle/>
              </button>
              <button
                  onClick={()=>handleRemoveTodo(todo.id)}
                  className="trash-button">
                  <BsTrash/>
              </button>
          </div>
      );
}

export default Todo;