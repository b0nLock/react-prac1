import React from 'react'
import '../App.css'
import TheButton from './UI/button/TheButton'

const PostItem = ({post, remove}) => {
  return (
    <div className='list'>
        <div>
            <h1>{post.id}. {post.title}</h1>
            <h2>{post.description}</h2>
        </div>
        <TheButton onClick={() => remove(post)}>Удалить</TheButton>
    </div>
  )
}

export default PostItem