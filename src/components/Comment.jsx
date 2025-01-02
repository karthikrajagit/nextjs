import React from 'react'
import Comments from './Comments'

export default function Comment({comments}) {

  const sortedComments = comments.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  )
  return (
    <div>

      {
        sortedComments.map((comment) => (
          <Comments key={comment.id} comment={comment}/>
      )) }
    </div>
  )
}
