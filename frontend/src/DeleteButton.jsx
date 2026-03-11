import { IconButton } from "@mui/material";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

export default function DeleteButton({onClick})
{
    return <IconButton variant="contained" color="error" onClick={(index) => onClick(index)}> <DeleteOutlineRoundedIcon></DeleteOutlineRoundedIcon></IconButton>
}