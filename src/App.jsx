import { useMemo, useState } from 'react'

import './App.css'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import PostFilter from './components/PostFilter'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'A_Карточка 1', description: 'T_Описание 1'},
    {id: 2, title: 'C_Карточка 2', description: 'C_Описание 2'},
    {id: 3, title: 'D_Карточка 3', description: 'B_Описание 3'},
    {id: 4, title: 'B_Карточка 4', description: 'T_Описание 4'},
    {id: 5, title: 'Карточка 5', description: 'X_Описание 5'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])


  return (
    <div className='interface'>
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length == 0 
      ? <h2>Данные не найдены</h2>
      : <PostList remove={removePost} posts={sortedAndSearchedPosts} />
      }
      <PostForm create={createPost} postList={posts} />
    </div>
  )
}

export default App
