import React from 'react'

export const ComentarioComponent = ({comentario}) => {
  return (
    <div className='card-comentario'>
      <p>{comentario}</p>
    </div>
  )
}