import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PostItem from './PostItem'
import '../App.css'
import React, { useRef } from 'react'

const PostList = ({posts, remove}) => {
  if (!posts.length) return <h2>Данные не найдены</h2>
  const nodeRefs = useRef(new Map())
  return (
    <>
        <TransitionGroup>
          {posts.map((post) => {
            // получить существующий ref или создать новый
            let ref = nodeRefs.current.get(post.id)
            if (!ref) {
              ref = React.createRef()
              nodeRefs.current.set(post.id, ref)
            }

            return (
              <CSSTransition
                key={post.id}
                timeout={300}
                classNames="list"
                nodeRef={ref}            // важно — даём CSSTransition ссылку на DOM-узел
                unmountOnExit
              >
                {/* Передаём ref в PostItem (forwardRef) */}
                <PostItem ref={ref} remove={remove} post={post} />
              </CSSTransition>
            )
        })}
        </TransitionGroup>
    </>
  )
}

export default PostList