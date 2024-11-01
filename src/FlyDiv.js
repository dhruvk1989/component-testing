import React, { useState } from 'react'

const FlyDiv = () => {

    const [firstHidden, setFirstHidden] = useState('block')
    const [secondHidden, setSecondHidden] = useState('hidden')
    const [animateOne, setAnimateOne] = useState('')
    const [animateTwo, setAnimateTwo] = useState('')

    const clickNext = () => {
        // First div animates out
        setAnimateOne('transition-all translate-x-full duration-500');
        
        // Second div starts from out position, but hidden
        setAnimateTwo('transition-all translate-y-full duration-500');
        setSecondHidden('block');
    
        // Small delay to ensure second div is in starting position
        setTimeout(() => {
            // Animate second div in
            setAnimateTwo('transition-all translate-y-0 duration-500');
        }, 50);
    
        // Hide first div after animation completes
        setTimeout(() => {
            setFirstHidden('hidden');
        }, 500);
    };

    const clickPrev = () => {

        setAnimateOne('transition-all translate-x-0 duration-500');

        setTimeout(() => {
            setFirstHidden('block')
            setSecondHidden('hidden')
        }, 500);
    }

    return (
        <div className='relative overflow-hidden h-full'>
            <div className={`absolute ${firstHidden} ${animateOne} flex flex-col p-2 bg-cyan-600 justify-center m-5`}>
                <h3>Oh god 1</h3>
                <div className='flex flex-row justify-between m-2'>
                    <button>Prev</button>
                    <button onClick={clickNext}>Next</button>
                </div>
            </div>

            <div className={`absolute ${secondHidden} ${animateTwo} flex flex-col p-2 bg-cyan-600 justify-center m-5`}>
                <h3>Oh god 2</h3>
                <div className='flex flex-row justify-between m-2'>
                    <button onClick={clickPrev}>Prev</button>
                    <button>Next</button>
                </div>
            </div>
        </div>
    )
}

export default FlyDiv