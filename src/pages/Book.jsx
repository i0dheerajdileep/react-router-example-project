import React from 'react'
import { useParams } from 'react-router-dom'
function Book() {
  const {id} = useParams()
  return (
    <div>
      <h>Books {id}</h>
    </div>
  )
}

export default Book
