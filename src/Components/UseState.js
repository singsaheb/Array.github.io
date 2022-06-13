import React,{useState} from 'react'

const UseState = () => {
    const [data,setdata] = useState("santosh")

  const btnHandler = ()=>{
    if(data==="santosh"){
        setdata("kumar")
    }else{
        setdata("santosh")
    }
  }
  return (
    <>
        <h1>{data}</h1>
      <button type='button' onClick={btnHandler}>change data</button>
    </>
  )
}

export default UseState