import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

export function Alayout() {
    return (
        <>
            <aside style={{ display: 'flex', flexDirection: 'column', padding: '40px', position: 'fixed', top: '0', left: '0', width: '150px', height: '100vh', background: '#1E293B', color: 'white' }}>
                <h5>ola mundo</h5>
            </aside>

            <nav style={{ display: 'flex', gap: '20px', padding: '13px', justifyContent: 'right', background: '#1E3A8A', width: '100%', top: '0', left: '0', alignItems: 'center', boxSizing: 'border-box', position: 'fixed', }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'black', display: 'flex' }}><HomeIcon />Home</Link>
                <Link to="/Login" style={{ textDecoration: 'none', color: 'black', display: 'flex' }}>Login</Link>
                <Link to="/register" style={{ textDecoration: 'none', color: 'black', display: 'flex' }}>Register</Link>
            </nav>
        </>
    );
}