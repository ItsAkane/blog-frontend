import { Box } from "@mui/material";

export default function Login() {
  return(
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', mt: 5 }}>
        <h1>Login Page</h1>
        <input type="text" placeholder="login"/>
        <input type="password" placeholder="senha"/>
        <input type="button" value="Login" />
      </Box>
    </>
  );
}