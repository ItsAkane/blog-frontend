import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function Register() {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function cadastro_login(e) {

        e.preventDefault();

        const dadosDoLogin = {
            login: login,
            password: password
        };

        try {
            const respost = await fetch('http://localhost:3000/api/cadastrar/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(dadosDoLogin)
            });

            if (!respost.ok) {
                const erroBackend = await respost.json();
                throw new Error(erroBackend.mensagem || 'Erro ao cadastrar usuario');
            }

            const dados = await respost.json();
            console.log("cadastro realizado com sucesso", dados);
            alert("Conta Cadastrada com sucesso. Faça login.");
            navigate("/login");


        } catch (error) {
            console.error("Erro ao cadastrar: ", error.message);
            alert(`Erro ao efetuar cadastro: ${error.message}`);
        }
    }

    return (
        <>
            <Box>
                <h1>Registre-se</h1>
                <Box component="form" onSubmit={cadastro_login} sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                    <TextField id="Login-register" label="Login" variant="outlined" value={login} onChange={(e) => setLogin(e.target.value)} required focused />
                    <TextField type="password" id="Password-register" label="Senha" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} required focused />
                    <Button type="submit" id="RegisterBtn" variant="outlined">Register</Button>
                </Box>
            </Box>
        </>
    )
}