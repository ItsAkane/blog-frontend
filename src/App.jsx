import { Outlet } from 'react-router-dom'
import './index.css';
import { Alayout } from './Components/alayout';

function App() {



  return (
    <>
    <Alayout />

      <main>
        <Outlet />
      </main>


    </>
  )
}

export default App
