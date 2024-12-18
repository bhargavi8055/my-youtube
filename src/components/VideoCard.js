import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails} = snippet
    
    if(info== undefined) return null;
  return (
    <div className='p-2 m-2 w-64 '>
      <img className='rounded-lg'
      src={thumbnails.medium.url}
      alt={info.title}
      />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  )
}

export default VideoCard
