import { useState } from 'react'
import TheButton from '../components/UI/button/TheButton'
import MyInput from '../components/UI/input/MyInput'
import '../App.css'

const PostForm = ({create, postList}) => {
    const [post, setPost] = useState({
        title: '',
        description: ''
    });
    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: postList.length + 1
        }
        create(newPost)
        setPost({title: '', description: ''})
    }

  return (
    <form className='form'>
        <MyInput 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text" placeholder="Введите название" />
        <MyInput
          value={post.description}
          onChange={e => setPost({...post, description: e.target.value})}
          type="text" placeholder="Введите описание" />
        <TheButton onClick={addPost}>Создать пост</TheButton>
    </form>
  )
}

export default PostForm