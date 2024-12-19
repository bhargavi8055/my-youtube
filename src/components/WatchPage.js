import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {

  const [searchParams] = useSearchParams()
  console.log(searchParams.get('v'))

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closeMenu())
  },[])

  
  
  return (
    <div>
        <div className='px-5 rounded-lg'>
            <iframe className='rounded-xl'
            width="900"
            height="500"
            src={'https://www.youtube.com/embed/'+searchParams.get('v')}
            title='YouTube video player'
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen

            >

            </iframe>
          
        </div>
        {/* Comments Section */}
        <CommentsContainer />
       
    </div>
  )
}

export default WatchPage
