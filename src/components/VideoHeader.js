import React, {useState} from 'react';


const VideoHeader = ({ video }) => {
    const {title, views, upvotes, downvotes, createdAt} = video
    const [upVotes, setUpVotes] = useState(upvotes);
    const [downVotes, setDownVotes] = useState(downvotes)
    
    function handleUpVotes(){
        setUpVotes(upVotes + 1)
    }

    function handleDownVotes(){
        setDownVotes(downVotes + 1)
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded: {createdAt}</p> 
            <button onClick={handleUpVotes}> 👍🏻{upVotes} </button> <button onClick={handleDownVotes}> 👎🏻 {downVotes} </button>
        </div>
    )
}

export default VideoHeader
