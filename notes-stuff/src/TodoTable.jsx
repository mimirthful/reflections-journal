import DeleteButton from './DeleteButton';
import {Stack} from '@mui/material';
import TodoResultCard from './TodoResultCard';

export default function TodoTable({todos, deleteTodo})
{

    // creates cards from the todo-array.
    const mapped = todos.map((todo, index) => 
        {

         return  <Stack key={index}
         direction="row"   
         sx={{
            justifyContent: "center",
            alignItems: "flex-start",
            }}>
            <TodoResultCard  todo={todo}></TodoResultCard> 
            <DeleteButton onClick={() => deleteTodo(index)}/>
        </Stack>})

    //Presents the cards in a stack
    return <> 
    <Stack spacing={2} direction="column-reverse">
            {mapped}
    </Stack>
    </>
}