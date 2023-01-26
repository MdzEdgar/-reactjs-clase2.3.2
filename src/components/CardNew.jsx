import React from 'react'

const CardNew = ({newNote}) => {
  return (
    <article className='article'>
      <div className='article__img'>
        <img src={newNote?.urlToImage} alt={newNote?.title} />
      </div>
      <h3 className='article__title'>{newNote?.title}</h3>
      <p className='article__description'>{newNote?.description}</p>
      <h6 className='article__publishedDate'>{newNote?.publishedAt}</h6>
      <a className='article__a' target='_blank' href={newNote?.url}>Más información</a>
    </article>
  )
}

export default CardNew