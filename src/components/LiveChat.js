import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';

const LiveChat = () => {

const [liveMessage,setLiveMessage] = useState("");
const dispatch = useDispatch();

const chatMessages = useSelector(store=>store.chat.messages)
 useEffect(()=>{
    //API/long Polling
    const interval = setInterval(()=>{
        dispatch(addMessage({
            name:generateRandomName(),
            message:generateRandomMessage(20)
        }))
    },1500)
    return ()=>{clearInterval(interval)}
 },[])
  return (
    <div className='w-full border border-black ml-2 rounded-lg shadow-sm h-[500px] p-2 '>
        <div className='h-[450px] overflow-y-scroll'>
            <h1>Chat</h1>
            {
                chatMessages.map((chatMessage,i)=>(

                    <ChatMessage name={chatMessage.name} message={chatMessage.message} key={i}/>
                ))
            }
        </div>
        <form className='border border-black w-full rounded-full' 
        onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name:"Bhargavi Mokharala",
                message:liveMessage
            }))
            setLiveMessage("")

            }}>
            <input type='text' className='w-3/4 rounded-l-full px-2 py-1' value={liveMessage}
            onChange={(e)=>{setLiveMessage(e.target.value)}}
            />
            <button className='w-1/4 bg-gray-100 rounded-r-full px-2 py-1'>Send</button>

        </form>
        
      
    </div>
  )
}

export default LiveChat
