import { connect } from 'react-redux'
import { getPostsThunk } from '../../store/slices/postsSlice'
import { useEffect } from 'react'

function PostsList ({ post, isFetching, error, getPosts }) {
  useEffect(() => {
    getPosts()
  }, [])
  const mapProps = p => {
    return (
      <li key={p.id}>
        <h3>{p.title}</h3>
        <p>{p.body}</p>
      </li>
    )
  }
  return (
    <>
      {isFetching && <div>Loading....</div>}
      {error && <div>ERRROR!!!!</div>}
      {!isFetching && !error && <ul>{post.map(mapProps)}</ul>}
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPostsThunk)
})

const mapStateToProps = ({ postsList }) => postsList

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
