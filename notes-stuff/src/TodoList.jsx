import {useState} from 'react';
import {Button } from '@mui/material';
import DefaultField from './DefaultField';
import TodoTable from './TodoTable';
export default function TodoList()
{
    // first todo state is an object with two fields
    const [todo, setTodo] = useState({goals:'', challenges:'', responses:''});
    const [todos, setTodos] = useState([])

    function OnTextChange(event){
        setTodo({...todo, [event.target.name]:[event.target.value]})
    }

    async function fetchData()
    {
        fetch("http://localhost:8080/")
        .then(response => response.json()) // or .text()
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
    const addTodos = () => {
        setTodos([...todos, todo])
        setTodo({goals:'', challenges:'', responses:''})
        fetchData()
    }

    const deleteTodo = (row) => {
        setTodos(todos.filter((todo, index) => index !== row));
      }
    return <>

    <DefaultField label='What goals I want to achieve today?' name="goals" value={todo.goals} onChange= {(e) => {OnTextChange(e)}}/>
    <DefaultField name='challenges' label='What challenges may I face?' value={todo.challenges} onChange= {(e) => {OnTextChange(e)}}/>
    <DefaultField name='responses' label='How do I respond to said challenges?' value={todo.responses} onChange= {(e) => {OnTextChange(e)}}/>
    
    <Button onClick={addTodos}>Add</Button>
    <TodoTable todos={todos} deleteTodo={deleteTodo}/>

    </>
}