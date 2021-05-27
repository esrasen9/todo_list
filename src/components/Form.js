import React from 'react';
import {BsPlusCircle} from "react-icons/bs";
import nextId from "react-id-generator";

const Form = ({todoInput,setTodoInput,todos,setTodos,setFilters}) => {

      const handleInputChange = (e) => {
          setTodoInput(e.target.value);
      }

      const handleSubmitTodo = (e) => {
          e.preventDefault();
          const newTodos = [{
              text: todoInput,
              completed: false,
              id: nextId("todo-")
          },...todos]
          setTodos(newTodos);
          setTodoInput("");
      }

      const handleFilter = (e) => {
          setFilters(e.target.value);
      }

      return (
          <div>
              <form className="todo-form">
                  <input onChange={handleInputChange}
                         type="text"
                         value = {todoInput}
                         placeholder="What's your plan for today"/>
                  <button onClick={handleSubmitTodo} className="todo-button" type="submit">
                      <BsPlusCircle className="plus-icon"/>
                  </button>
                  <div className="select-box">
                      <select onChange={handleFilter} name="filters" className="filter-todo">
                          <option value="all">All</option>
                          <option value="completed">Completed</option>
                          <option value="uncompleted">Uncompleted</option>
                      </select>
                  </div>
              </form>
          </div>
      );
}

export default Form;