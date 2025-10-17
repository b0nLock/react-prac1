import React from 'react'
import '../App.css'
import TheButton from './UI/button/TheButton'
import { useNavigate } from 'react-router'

const PostItem = React.forwardRef(({ post, remove }, ref) => {
  const router = useNavigate()
  return (
    <div className='list' ref={ref}>
        <div>
            <h2>{post.id}. {post.title}</h2>
            <h3>{post.body}</h3>
        </div>
        <div style={{display: 'flex', gap: '10px'}}>
          <TheButton onClick={() => router(`/posts/${post.id}`, {replace: true})}>Открыть</TheButton>
          <TheButton onClick={() => remove(post)}>Удалить</TheButton>
        </div>
    </div>
  )
})

export default PostItem