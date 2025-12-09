import ContactsPage from './pages/ContactsPage'
import PostsPage from './pages/PostsPage'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <div>
      <BrowserRouter>
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
          <Route path='/contact' element={<ContactsPage />} />
          <Route path='/posts' element={<PostsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
