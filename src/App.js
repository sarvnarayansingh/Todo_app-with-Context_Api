import React,{useReducer} from "react"
import {Container} from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import {TodoContext} from './context/TodoContext'
import TodoReducer from './context/reducer'
import TodoForm from "./components/TodoForm";

function App() {
  const[todo,dispatch] = useReducer(TodoReducer,[])
  return (
    <TodoContext.Provider value={{todo,dispatch}}>
      <Container fluid>
        <h1>Todo App With Context Api</h1>
        <TodoForm />
      </Container>

    </TodoContext.Provider>
    
  );
}

export default App;
