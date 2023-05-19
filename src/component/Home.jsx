import React, { useState } from 'react'
import "../style/home.css"
import person from"../component/data"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"
const Home = () => {
const [index,setIndex]=useState(0)
const {name,job,image,text}=person[index]

const checkNumber =(number)=>{
if (number >person.length - 1){
  return 0
}
if(number < 0){
  return person.length - 1
}
return number
}

const next=()=>{
    setIndex((index)=>{
      let plus =index +1
      return checkNumber(plus)
    })
}
const preview=()=>{
  setIndex((index)=>{
    let minus=index-1
    return checkNumber(minus)
  })
}
const randomBtn=()=>{
  let random = Math.floor(Math.random()*person.length)
  if(random === index){
    random =index+1
  }
  setIndex(checkNumber(random))

}
  return (
    <div className='container'>
        <div className='img'>
            <img src={image} alt={name} className='imgTag'/>
        </div>
    <div className='profile'>
        <h3>{name} </h3>
        <p>{job} </p>
        <span>{text} </span>
    </div>
    <div className="btns">
        <button className='prevBtn' onClick={next}><FaChevronLeft/></button>
        <button className='nextBtn' onClick={preview}><FaChevronRight/></button>
    </div>
    <button className='randomBtn' onClick={randomBtn}>surprise me</button>
    </div>
  )
}

export default Home