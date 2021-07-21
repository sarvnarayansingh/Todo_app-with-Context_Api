import React,{useState,useContext} from 'react'
import {FormGroup,Input,Button,Form,InputGroup,InputGroupAddon} from 'reactstrap'
import {v4} from 'uuid'
import {TodoContext} from '../context/TodoContext'
import {ADD_TODO} from '../context/actionConstant'

const TodoForm = () => {
    const [todoString,setTodoString] = useState("")
    const {dispatch} = useContext(TodoContext)

    const sumitHandler = () => {
        if(todoString===""){
           return alert("please enter todo")
        }

        const todo = {
            todoString,
            id:v4()
        }

        dispatch({
            type:ADD_TODO,
            payload:todo
        })
        setTodoString("")
    }

    return(
        <Form >
            <FormGroup>
                <InputGroup>
                <Input 
                type="text"
                name="todo"
                id="todo"
                placeholder="Your next todo"
                value={todoString} 
                onChange={(event) => setTodoString(event.target.value)} />
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Button color="warning" onClick = {sumitHandler}>Add</Button>
                </InputGroup>
            </FormGroup>
        </Form>

    )
}
export default TodoForm