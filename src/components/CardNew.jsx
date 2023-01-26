import React from 'react'

const CardNew = ({newNote}) => {
  return (
    <article>
      <h3>{newNote?.title}</h3>
      <p>{newNote?.description}</p>
      <h6>{newNote?.publishedAt}</h6>
    </article>
  )
}

export default CardNew