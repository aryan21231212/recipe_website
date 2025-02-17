import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';


const Mealcard = ({data}) => {

   
  return (
    <>
   
        <Container>
        { !data?"Data not found":data.map((ele) => {
          return (
            <div className='card' key={ele.idMeal}>  
              <img src={ele.strMealThumb}  /> 
              <h4>{ele.strMeal}</h4>
              <NavLink to = {`/${ele.idMeal}`}><button>Recipe</button></NavLink>
            </div>
          )
        })}
      </Container>

   
   
  
    </>
  )
}

export default Mealcard


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;  
  gap: 20px;
  justify-content: center;
  
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
    width: 200px;  
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); 

    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 10px; 
    }

    h4 {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
    }

    button {
      padding: 10px;
      font-size: 1rem;
      border-radius: 20px;
      border: none;
      background-color: orange;
      cursor: pointer;
      color: white;
      font-weight: 700;
      width: 120px;
      margin-top: 10px;
    }
  }
`
