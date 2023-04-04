import React from 'react'
import {Link, Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import Book from './pages/Book'
import Notfound from './pages/Notfound'
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* first method */}
        {/* <Route path='/books' element={<Books/>}/>
        <Route path='/book/:id' element={<Book/>}/> */}
        {/* second method */}
        <Route path='/books'>
          <Route index element = {<Books/>}/> 
          <Route path=':id' element={<Book/>}/>
        </Route>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </div>
  )
}

export default App
