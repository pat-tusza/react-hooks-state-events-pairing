import React from 'react'

const CommentCard = ({id, user, comment}) => {
   
    return (
        <div>
            <strong> {user} </strong>
            <p> {comment} </p>  
        </div>
    )
}

export default CommentCard
