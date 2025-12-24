import ContactsPage from './pages/ContactsPage'
import PostsPage from './pages/PostsPage'
import { Link, BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App () {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
            <li>
              <Link to={'/posts'}>Post</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Navigate to='/posts' />} />
          <Route path='/contact' element={<ContactsPage />} />
          <Route path='/posts' element={<PostsPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
