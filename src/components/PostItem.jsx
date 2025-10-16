import React from 'react'
import '../App.css'
import TheButton from './UI/button/TheButton'

const PostItem = React.forwardRef(({ post, remove }, ref) => {
  return (
    <div className='list' ref={ref}>
        <div>
            <h2>{post.id}. {post.title}</h2>
            <h3>{post.body}</h3>
        </div>
        <TheButton onClick={() => remove(post)}>Удалить</TheButton>
    </div>
  )
})

export default PostItem