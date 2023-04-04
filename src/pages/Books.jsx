import React from 'react'
import { Link } from 'react-router-dom'

function Books() {
  return (
    <div>
      <h1>Book List</h1>
      <Link to="/book/1">Book 1</Link><br/>
      <Link to="/book/2">Book 2</Link>
    </div>
  )
}

export default Books
