import React from 'react'
import Comment from './Comment'

const CommentsList = ({comments}) => {
    return comments.map((comment,index)=>(
        <>
        <Comment data={comment} key={index}/>
        {/* replies */}
        <div className='border border-l-black ml-5'>
            <CommentsList comments={comment.replies}/>
        </div>
        </>
    
    ))
  }

export default CommentsList
