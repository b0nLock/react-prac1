import React, { useRef } from 'react'
import { useEffect, useMemo, useState } from 'react'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import PostFilter from '../components/PostFilter'
import MyModal from '../components/mymodal/MyModal'
import TheButton from '../components/UI/button/TheButton'
import { usePosts } from '../hooks/useHooks'
import axios from 'axios'
import PostSerive from '../API/PostService'
import Loader from '../components/UI/loader/Loader'
import { useFetching } from '../hooks/useFetching'
import { getPageCount, getPagesArray } from '../utils/pages'

import '../App.css'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const lastElement = useRef()
  const observer = useRef();


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostSerive.getAll(limit, page)
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    if (isPostsLoading) return;
    if (observer.current) observer.current.disconnect;
    var callback = function(entries, observer) {
      if (entries[0].isIntersecting && page < totalPages) {
        console.log(page)
        setPage(page + 1)
      }
    }

    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current)
  }, [isPostsLoading])

  useEffect(() => {
    fetchPosts()
  }, [page])

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  let pagesArray = getPagesArray(totalPages)


  return (
    <div className='interface'>
      <TheButton onClick={() => setModal(true)}>Создать пользователя</TheButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} postList={posts} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && 
        <h1>Произошла ошибка: {postError}</h1>
      }
      <PostList remove={removePost} posts={sortedAndSearchedPosts} />
      {isPostsLoading &&
        <Loader />
      }
      <div id='scrollArea' ref={lastElement} style={{ 
        height: '20px', width: "100%"}}></div>
      <div style={{display: 'flex', gap: '10px', marginTop: '20px'}}>
        {pagesArray.map((p, index) => 
          <TheButton 
            style={page === p ? {backgroundColor: 'orange'} : {}} 
            key={index}
            onClick={() => setPage(p)}
          >{p}</TheButton>
        )}
      </div>
    </div>
  )
}

export default Posts