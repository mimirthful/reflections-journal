import {  Paper, Typography} from "@mui/material";
export default function TodoResultCard({todo})
{
    return  <> 
    <Paper sx={{textAlign:"left"}}>
        <Typography variant='body1' color='secondary'>Date: {todo.day}</Typography>
        <Typography variant='overline' color='secondary'>What goals I want to achieve today?</Typography>
        <Typography variant='body1'> {todo.goal}</Typography>
        <Typography variant='overline' color='secondary'>What challenges may I face?</Typography>
        <Typography variant='body1'> {todo.challenge}</Typography>
        <Typography variant='overline' color='secondary'>How do I respond to said challenges?</Typography>
        <Typography variant='body1'> {todo.response}</Typography>
    </Paper>
    </>
}