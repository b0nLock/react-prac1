import { useState } from 'react'

import './App.css'
import Card from './Components/Card'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Карточка 1', description: 'Описание 1'},
    {id: 2, title: 'Карточка 2', description: 'Описание 2'},
    {id: 3, title: 'Карточка 3', description: 'Описание 3'},
    {id: 4, title: 'Карточка 4', description: 'Описание 4'},
    {id: 5, title: 'Карточка 5', description: 'Описание 5'},
  ])
  

  return (
    <>
      {posts.map((post) => (
        <Card post={post} key={post.id} />
      ))}
    </>
  )
}

export default App
