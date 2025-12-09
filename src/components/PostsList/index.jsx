import { connect } from 'react-redux'
import React from 'react'

function PostsList ({ post, isFetching, error }) {
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

const mapStateToProps = ({ postsList }) => postsList

export default connect(mapStateToProps)(PostsList)
