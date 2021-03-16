import React, { useState } from 'react'
import CommentCard from './CommentCard'

const CommentList = ({ comments }) => {
    const [search, setSearch] = useState("")
    const filteredComments = comments.filter(comment => comment.user.toLowerCase().includes(search.toLowerCase()))
    const allComments = filteredComments.map((comment) => {
        return (<CommentCard id={comment.id} user={comment.user} comment={comment.comment} />)
    })
    
    const [isHidden, setIsHidden] = useState(false)

    function handleHideComments() {
        setIsHidden(!isHidden)
    }

    function handleSearchChange(e) {
        setSearch(e.target.value)
    }

    return (
        <div>
            <input
                  type="text"
                  placeholder="Search..."
                  onChange={handleSearchChange}
            />
            <button onClick={handleHideComments}>{isHidden ? "Show" : "Hide"} Comments </button>
            <br></br>
            {isHidden ? null : (
                <div>
                    <p> {comments.length} Comments</p> 
                    <p> {allComments} </p> 
                </div>
                )}
        </div>
    )
}

export default CommentList
