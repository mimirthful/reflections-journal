import {useState, useEffect} from 'react';
import {Button } from '@mui/material';
import DefaultField from './DefaultField';
import TodoTable from './TodoTable';


export default function TodoList()
{
    // first todo state is an object with two fields
    const [todo, setTodo] = useState({id:'', day:'', isFavorite:0, goal:'', challenge:'', response:''});
    const [todos, setTodos] = useState([])

    function OnTextChange(event){
        setTodo({...todo, [event.target.name]:event.target.value})
    }

    async function fetchItems()
    {
        fetch("http://localhost:8080/")
        .then(response => response.json())
        .then(data => {
            setTodos(data)
            console.log("Items fetched")
        })
        .catch(err => console.log(err));
    }

    function timestampedTodo()
    {
        const currentTime = new Date(); 
        const timeFormatted = `${currentTime.getDate()}-${currentTime.getMonth() + 1}-${currentTime.getFullYear()}`
        const todoWithTime = {...todo, "day":timeFormatted}
        return todoWithTime;
    }

    function postTodo()
    {
        if(todo.challenge.length !== 0 && todo.length !== 0 && todo.length !== 0)
        {
            try{
            console.log("posting")
            const updatedTodo = timestampedTodo()
            fetch("http://localhost:8080/",
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updatedTodo),
                })
                .then(() => fetchItems()) // update new list from the DB
                .catch(err => console.log(err))
                setTodo(updatedTodo)
            } catch (err) {
                console.log(err.message)
            }
        }
        
    }


    useEffect(() => {fetchItems()}, [])


    const deleteTodo = (id) => {
        fetch(`http://localhost:8080/remove?id=${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .then(fetchItems())
        .catch(err => console.log(err));
    }


    return <>

    <DefaultField label='What goals I want to achieve today?' name="goal" value={todo.goal} onChange= {(e) => {OnTextChange(e)}}/>
    <DefaultField name='challenge' label='What challenges may I face?' value={todo.challenge} onChange= {(e) => {OnTextChange(e)}}/>
    <DefaultField name='response' label='How do I respond to said challenges?' value={todo.response} onChange= {(e) => {OnTextChange(e)}}/>
    
    <Button onClick={() => postTodo()}>Add</Button>
    <TodoTable todos={todos} deleteTodo={deleteTodo}/>

    </>
}