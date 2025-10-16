import { useState } from 'react'
import TheButton from './UI/button/TheButton'
import MyInput from './UI/input/MyInput'
import '../App.css'

const PostForm = ({create, postList}) => {
    const [post, setPost] = useState({
        title: '',
        body: ''
    });
    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: postList.length + 1
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

  return (
    <form className='form'>
        <MyInput 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text" placeholder="Введите название" />
        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text" placeholder="Введите описание" />
        <TheButton onClick={addPost}>Создать пост</TheButton>
    </form>
  )
}

export default PostForm