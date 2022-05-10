import { Typography } from "@mui/material";



export default function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'UPCT © '}
          By Erik García
        {' '+new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }