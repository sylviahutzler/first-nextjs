import React, {useState, useEffect} from 'react'



const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(0)
    //variable, function to tell react to update current count
    const handleClick = () => {
        setCurrentCount(currentCount+props.incrementBy)

    }
    useEffect(() => {
        if(currentCount === 10){
            setCurrentCount(0)
        }
    }, [currentCount])


   const buttonStyles ={
        background: props.buttonColor,
        //border-radius = borderRadius
    }

    return (
    <div >
        <button onClick={handleClick} style = {buttonStyles}>+{props.incrementBy}</button>
        <div className='countDisplay'>{currentCount}</div>

    </div>
    )

}

export default CountButton
