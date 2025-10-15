import PostItem from './PostItem'

const PostList = ({posts, remove}) => {
  return (
    <>
        {posts.map((post, index) => (
            <PostItem remove={remove} key={index} post={post} />
        ))}
    </>
  )
}

export default PostList