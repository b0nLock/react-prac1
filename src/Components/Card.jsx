import React from 'react'

function Card({post}) {
  return (
    <div className='list'>
        <h1>{post.id}. {post.title}</h1>
        <h2>{post.description}</h2>
    </div>
  )
}

export default Card