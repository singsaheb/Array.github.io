import React,{useState} from 'react'

const UseStateArray = () => {
    const boiData = [
        {
            id:0,
            myname:"pinki",
            age:23,
            qualification:"B.A"
        },
        {
            id:1,
            myname:"akhilesh",
            age:17,
            qualification:"Eight"
        },
        {
            id:2,
            myname:"kumari",
            age:24,
            qualification:"M.A"
        },
        {
            id:3,
            myname:"pinki2",
            age:25,
            qualification:"B.A"
        },
    ]
    const [myArray,setmyArray] = useState(boiData)
    
    const clearArray = ()=>{
        setmyArray([])
    }
  return (
    <>
        {
            myArray.map((curElm)=>{
                return <h1 key={curElm.id}>Name:{curElm.myname},  Age:{curElm.age},  Qualification:{curElm.qualification}</h1>
            })
        }
        <button type='button' onClick={clearArray}>clear</button>
    </>
  )
}

export default UseStateArray