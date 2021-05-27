import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList"
import React,{useState,useEffect} from "react";

function App() {
  const [todoInput,setTodoInput] = useState("");
  const [todos,setTodos] = useState([]);
  const [filters,setFilters] = useState("All");
  const [filteredTodos,setFilteredTodos] = useState([]);

  //Run once when the app start
  useEffect(()=>{
      getLocalTodos();
  },[]);

  useEffect(()=>{
      filterHandler();
      saveLocalStorageTodos();
  },[todos,filters]);

  const filterHandler = () => {
      switch (filters) {
          case "completed":
              setFilteredTodos(todos.filter(todo => todo.completed === true));
              break;
          case "uncompleted":
              setFilteredTodos(todos.filter(todo => todo.completed === false));
              break;
          default:
              setFilteredTodos(todos);
      }
  }

  const saveLocalStorageTodos = () => {
        localStorage.setItem("todos",JSON.stringify(todos));
  }

  const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null){
          localStorage.setItem("todos",JSON.stringify([]))
      }
      else {
          let todoLocal = JSON.parse(localStorage.getItem("todos",JSON.stringify(todos)));
          setTodos(todoLocal);
      }
  }

  return (
    <div className="App">
      <header>
          <h1>Todo List</h1>
      </header>
        <Form
            todoInput = {todoInput}
            setTodoInput ={setTodoInput}
            todos={todos}
            setTodos={setTodos}
            setFilters = {setFilters}
        />
        <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos = {filteredTodos}
        />
    </div>
  );
}

export default App;
