import React,{useState} from 'react'

const UseStateObject = () => {
    const [myObject,setmyObject] = useState({
        myname:"santosh",
        myage:24,
        mymovie:"pk",
        degree:"B.tech"
    })
    const upDateHandler = ()=>{
        setmyObject({...myObject,myname:"ram",myage:26})
    }
  return (
    <>
    <h1>Name:{myObject.myname} Age:{myObject.myage} Movie:{myObject.mymovie} Degree:{myObject.degree}</h1>
    <button onClick={upDateHandler}>updated</button>
    </>
  )
}

export default UseStateObject