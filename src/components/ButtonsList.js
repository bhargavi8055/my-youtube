import React from 'react'
import Button from './Button'

const ButtonsList = () => {

  const buttons=['All','Songs','Live','Cricket','Soccer','News','Food','Valentines','Devotional']
  return (
    <div className='flex'>
      {
        buttons.map((button,i)=>
          <Button name={button} key={i}/>
        )
      }
      
    </div>
  )
}

export default ButtonsList
