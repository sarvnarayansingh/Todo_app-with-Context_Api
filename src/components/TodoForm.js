import React,{useState,useContext} from 'react'
import {FormGroup,Input,Button,Form,InputGroup,InputGroupAddon} from 'reactstrap'
import {v4} from 'uuid'
import {TodoContext} from '../context/TodoContext'
import {ADD_TODO} from '../context/actionConstant'

const TodoForm = () => {
    return(
        <Form>
            <FormGroup>
                <InputGroup>
                <Input 
                type="text"
                name="todo"
                id="todo"
                placeholder="Your next todo"  />
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Button color="warning">Add</Button>
                </InputGroup>
                
            </FormGroup>
        </Form>

    )
}
export default TodoForm