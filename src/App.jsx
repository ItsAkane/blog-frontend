import { Link, Outlet } from 'react-router-dom'
import './App.css';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';

function App() {



  return (
    <>
      <top style={{display: 'flex', gap: '20px', padding: '10px', justifyContent: 'right'}}>
        <Link to="/" style={{textDecoration: 'none', color: 'black', display: 'flex'}}><HomeIcon />Home</Link>
        <Link to="/Login" style={{textDecoration: 'none', color: 'black', display: 'flex'}}><LoginIcon />Login</Link>
      </top>

      <main>
        <Outlet />
      </main>


    </>
  )
}

export default App
