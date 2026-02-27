import {Divider,  Paper, Typography} from "@mui/material";
export default function TodoResultCard({todo})
{
    return  <> 
    <Paper sx={{textAlign:"left"}}>
    <Typography variant='overline' color='secondary'>What goals I want to achieve today?</Typography>
    <Typography variant='body1'> {todo.goals}</Typography>
    <Typography variant='overline' color='secondary'>What challenges may I face?</Typography>
    <Typography variant='body1'> {todo.challenges}</Typography>
    <Typography variant='overline' color='secondary'>How do I respond to said challenges?</Typography>
    <Typography variant='body1'> {todo.responses}</Typography>
    </Paper>
    </>
}