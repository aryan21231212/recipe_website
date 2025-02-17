import React, { useState } from 'react'
import styled from 'styled-components'
import Mealcard from './Mealcard'

const Main = () => {
    const [data, setdata] = useState([])
    const [search, setsearch] = useState()
    const [msg,setmsg] = useState()
    function Userchoise(e){
        setsearch(e.target.value)
    }

   
    async function food(){
        if(search == ""){
            setmsg("Please Enter Something")
        }else{
            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        let Jsondata = await response.json()
        setdata(Jsondata.meals)
        setmsg("")
        }
        
} 
  
     
  return (
    <Container>
        <div>
            <h1>
                FOOD RECIPE APP
            </h1>
        </div>
        <div>
            <input onChange={Userchoise} type="text" placeholder='Search Meals' />
            <button onClick={food}>Search</button>
        </div>
        <div>
            <h1>Your Search Result's</h1>
        </div>
        <div>
        <h4 className='msg'>{msg}</h4>
        </div>
        <div>
            <Mealcard 
            data = {data}
            ></Mealcard>
        </div>
    </Container>
  )
}

export default Main

let Container = styled.div`
padding: 10px;
gap: 24px;
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
width: 100%;
    
    input{
        padding: 10px;
        font-size: 1rem;
        border-radius: 6px;
        background-color: #e7e7e7;
        border: none;
    }
    input::placeholder{
        font-weight: 500;
    }

    button{
        padding: 10px;
        font-size: 1rem;
        border-radius: 6px;
        border: none;
        background-color: orange;
        cursor: pointer;
        color: white;
        font-weight: 700;
        width: 100px;
        margin-left: 10px;
    }
`

