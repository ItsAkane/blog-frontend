import { Box, Button, TextField } from "@mui/material";

export default function Login() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', mt: 5 }}>
        <h1>Faça Login</h1>
        <TextField id="Login-input" label="Login" variant="outlined" />
        <TextField id="Password-input" label="Senha" variant="outlined" />
        <Button id="LoginBtn" variant="outlined">Login</Button>
      </Box>
    </>
  );
}