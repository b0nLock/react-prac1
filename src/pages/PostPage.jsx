import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useFetching } from '../hooks/useFetching'
import PostSerive from '../API/PostService'
import Loader from '../components/UI/loader/Loader'

const PostPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostSerive.getById(params.id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostSerive.getCommentsByPostId(params.id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    
  return (
    <div style={{padding: '20px'}}>
        <h1>Пост #{params.id}</h1>
        {isLoading
            ? <Loader />
            : <div>
                <p>Название: <strong>{post.title}</strong></p>
                <p>Описание: <strong>{post.body}</strong></p>
            </div>
        }
        <h2>Комментарии:</h2>
        {isComLoading 
            ? <Loader />
            : <div>
                {comments.map(comm => 
                    <div style={{marginTop: '15px'}}>
                        <h5>{comm.email}</h5>
                        <p>{comm.body}</p>
                    </div>
                )}
              </div>
        }
    </div>
  )
}

export default PostPage