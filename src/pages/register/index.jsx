import { Box, Button, TextField } from "@mui/material";

export function Register() {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', mt: 5 }}>
                <h1>Registre-se</h1>
                <TextField id="Nick-register" label="Nickname" variant="outlined" focused/>
                <TextField id="Login-register" label="Login" variant="outlined" focused/>
                <TextField id="Password-register" label="Senha" variant="outlined" focused/>
                <Button id="RegisterBtn" variant="outlined">Register</Button>
            </Box>
        </>
    )
}