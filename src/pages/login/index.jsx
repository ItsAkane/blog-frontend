import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";


export default function Login() {

  const { login } = useContext(AuthContext);
  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login: loginInput, password: passwordInput })
      });

      if (resposta.ok) {
        const dados = await resposta.json();
        login(dados);
        alert("Bem-vindo!");
        navigate("/");
      } else {
        alert("Usuário ou senha incorretos.");
      }
    } catch (error) {
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <h1>Faça Login</h1>
        <Box component="form" onSubmit={handleLogin} sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <TextField id="Login-input" label="Login" variant="outlined" focused value={loginInput} onChange={(e) => setLoginInput(e.target.value)} />
          <TextField type="password" id="Password-input" label="Senha" variant="outlined" focused value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} />
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