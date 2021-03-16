import React from 'react'


const VideoCard = ( { video } ) => {
    const {title, embedUrl} = video
    return (
        <div>
             <iframe
                width="919"
                height="525"
                src= {embedUrl}
                frameborder="0"
                allowfullscreen
                title= {title}
      />
        </div>
    )
}

export default VideoCard
