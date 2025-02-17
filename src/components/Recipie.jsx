import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Recipie = () => {
  const [info, setInfo] = useState(null)
  const { mealid } = useParams()


  useEffect(() => {
    const instruct = async () => {
      let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
      let jsondata = await response.json()
      setInfo(jsondata.meals ? jsondata.meals[0] : null) 
    }

    instruct() 
  }, [mealid]) 

  
  if (!info) {
    return <div>Data not found or loading...</div>
  }

  return (
    <Container>
      <img className='img' src={info.strMealThumb} alt={info.strMeal} />
      <div>
        <h1>Recipe Details</h1>
        <div>
          <button>{info.strMeal}</button>
        </div>
        <h3>Instructions:</h3>
        <p>{info.strInstructions}</p>
      </div>
    </Container>
  )
}

export default Recipie


const Container = styled.div`
height: 100vh;
background-color: orange;
  img{
    height: 400px;
    width: 500px;
    border-radius: 0.5rem;
  }
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 20px;
  h1{
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  button{
    padding: 10px;
    font-size: 1rem;
    border-radius: 0.75rem;
    background-color: coral;
    border: none;
    color: white;
    font-weight: 700;
    margin: 20px 0px;
  }
  h3{
    font-size: 24px;
    font-weight: 600;
  }

`