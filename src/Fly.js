import React, { useState } from 'react'

const Fly = () => {

    const [animate, setAnimate] = useState('')

    const setAnimatedDiv = () => {
        if(animate === 'translate-x-full'){
            setAnimate('translate-x-0')
        }else{
            setAnimate('translate-x-full');
        }
    }

  return (
    <div>
        <div onClick={() => setAnimatedDiv()} className={`bg-red-600 p-5 w-fit ${animate} transition-all duration-200`}>
            Hello!
        </div>
    </div>
  )
}

export default Fly