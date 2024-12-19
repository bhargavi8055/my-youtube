import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery,setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([])
  const dispatch = useDispatch();
  const cacheSuggestions = useSelector(store=>store.search)

  const toggleMenuHandler = ()=>{
   dispatch(toggleMenu())
  }
  const getSearchSuggestions = async()=>{
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1])
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }))
  }
  useEffect(()=>{
   const timer= setTimeout(()=>{
    if(cacheSuggestions[searchQuery]){
      setSuggestions(cacheSuggestions[searchQuery])
    }
    else{

      getSearchSuggestions()
    }

   },200);

   return ()=>{
    clearTimeout(timer)
   }
  },[searchQuery])

  return (
    <div className='grid grid-flow-col m-2 p-3 '>
      <div className='flex col-span-1'>
        <img className='h-8 cursor-pointer'
        src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png'
        alt='hamburger-icon'
        onClick={toggleMenuHandler}
        />
        <a href='/'>
          <img className='h-8 mx-2'
          src='https://cdn.worldvectorlogo.com/logos/youtube-6.svg'
          alt='youtube-logo'
          />
        </a>
      </div>

      <div className='col-span-10 px-4'>
        <div>
          <input className='w-3/4  border border-gray-400 p-2 rounded-l-full'
          type='text' onChange={(e)=>setSearchQuery(e.target.value)}
          />
          <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'> 🔍 </button>
        </div>
        {
          suggestions.length>0 && ( <div className='fixed bg-white py-2 px-5 w-1/2 rounded-lg shadow-lg border border-gray-100'>

          {
            suggestions.map(suggestion=>(
              <li className='py-2 shadow-sm hover:bg-gray-100' key={suggestion}>🔍 {suggestion}</li>
            ))
          }
          </div>)
        }
       
          {/* <ul>
            <li className='py-2 shadow-sm hover:bg-gray-100'>🔍 Iphone</li>
            <li className='py-2 shadow-sm hover:bg-gray-100'>🔍 Iphone</li>
            <li className='py-2 shadow-sm hover:bg-gray-100'>🔍 Iphone</li>
            <li className='py-2 shadow-sm hover:bg-gray-100'>🔍 Iphone</li>
            <li className='py-2 shadow-sm hover:bg-gray-100'>🔍 Iphone</li>
            <li className='py-2 shadow-sm hover:bg-gray-100'>🔍 Iphone</li>
            <li className='py-2 shadow-sm hover:bg-gray-100'>🔍 Iphone</li>
            <li className='py-2 shadow-sm hover:bg-gray-100'>🔍 Iphone</li>
            <li className='py-2 shadow-sm hover:bg-gray-100'>🔍 Iphone</li>
            <li className='py-2 shadow-sm hover:bg-gray-100'>🔍 Iphone</li>
            <li className='py-2 shadow-sm hover:bg-gray-100'>🔍 Iphone</li>
          
          </ul> */}
        
      </div>

      <div className='col-span-1'>
        <img className='h-8'
        src='https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png'
        alt='user-icon'
        />
      </div>
    </div>
  )
}

export default Head
