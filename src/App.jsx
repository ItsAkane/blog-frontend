import { Outlet } from 'react-router-dom'
import './index.css';
import { Navbar } from './Components/navbar';

function App() {



  return (
    <>
    <Navbar/>

      <main>
        <Outlet />
      </main>


    </>
  )
}

export default App
