import React from 'react'

const Comment = ({data}) => {
    const {name,text} = data;
    return (
      <div className='flex bg-gray-100 rounded-lg p-2 m-2'>
        <div className='mt-1'>

        <img alt='user' className=' h-6'
        src='https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png' />
        </div>
        <div className='py-0 my-0'>
          <div className='font-bold text-lg'>{name}</div>
          <div>{text}</div>
        </div>
      </div>
    )
  }

export default Comment;
