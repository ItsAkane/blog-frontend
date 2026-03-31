import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', mt: 5 }}>
        <h1>Faça Login</h1>
        <TextField id="Login-input" label="Login" variant="outlined" focused/>
        <TextField id="Password-input" label="Senha" variant="outlined" focused/>
        <Button id="LoginBtn" variant="outlined">Login</Button>

        <Link to="/register" tyle={{ textdeoration: 'none' }}>
          <Typography s>
            Ainda não possui conta?
            Cadastre-se
          </Typography>
        </Link>
      </Box>
    </>
  );
}