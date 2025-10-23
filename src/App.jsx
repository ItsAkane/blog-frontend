import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home.jsx'
import Login from './pages/Login.jsx'
import Post from './pages/post.jsx'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/">Home</Link> |{' '}
          <Link to="/login">Login</Link> |{' '}
          <Link to="/post/1">Post 1</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
