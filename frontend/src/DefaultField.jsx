import { TextField } from '@mui/material';

export default function DefaultField({name, label, value, onChange})
{
    return <TextField id='outlined-multiline-flexible' 
    label= {label}
    multiline minRows={4} color='secondary' 
    value={value}
    onChange={(e) => onChange(e)}
    name={name}
    fullWidth
    />
}