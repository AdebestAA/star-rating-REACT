import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
const StarRating = () => {
    const [arrayOFStars,setArrayOfStars] = useState([...Array(5)])
    const [rating,setRating] = useState(0)
    const [hover,setHover] =useState(0) 

        const handleClick=(indexOfStar)=>{
        setRating(indexOfStar)
        }
        const handleMouseOver = (indexOfStar)=>{
        setHover(indexOfStar)
        console.log(indexOfStar);
        }

        return (
        <div className='div'>
        <h1>player</h1>
        {arrayOFStars.map((_,index)=>{
        index ++
        return (
        <FaStar
        className={index <= (rating || hover) ? "active" : "not-active"}
        key={index}
        size={30}
        onClick={()=> handleClick(index)}
        onMouseOver={()=> handleMouseOver(index)}
        />
        )
        })}
        </div>
  )
}

export default StarRating
