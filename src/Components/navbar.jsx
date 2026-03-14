import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <>
            <nav style={{ display: 'flex', gap: '20px', padding: '13px', justifyContent: 'right', background:'#1E3A8A', width:'100%', top:'0', left:'0',alignItems:'center', boxSizing:'border-box', position:'fixed', }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'black', display: 'flex' }}><HomeIcon />Home</Link>
                <Link to="/Login" style={{ textDecoration: 'none', color: 'black', display: 'flex' }}>Login</Link>
                <Link to="/register" style={{ textDecoration: 'none', color: 'black', display: 'flex' }}>Register</Link>
            </nav>
        </>
    );
}