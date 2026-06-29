import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";


export default function Login() {

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  async function handleLogin(e){
    e.preventDefault();

    login();
    
    navigate("/");
  }

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <h1>Faça Login</h1>
        <Box component="form"  onSubmit={handleLogin} sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <TextField id="Login-input" label="Login" variant="outlined" focused />
          <TextField type="password" id="Password-input" label="Senha" variant="outlined" focused />
          <Button type="submit" id="LoginBtn" variant="outlined">Login</Button>
        </Box>


        <Link to="/register" style={{ textdeoration: 'none' }}>
          <Typography s>
            Ainda não possui conta?
            Cadastre-se
          </Typography>
        </Link>
      </Box>
    </>
  );
}