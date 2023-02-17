import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { BrowserRouter as Router, Route, Routes, Link,Redirect } from 'react-router-dom'
const Container=styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`
const IMAGE=styled.img`
width:100%;
height:100%;
object-fit:cover;
${mobile({ height: "30vh " })}
`
const Info=styled.div`
position:absolute;
top:0;
bottom:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const Title=styled.h1`
color:white;
margin-bottom:20px;
`
const Button=styled.button`
border:none;
cursor:pointer;
padding:10px;
color:grey;
background-color:white;
font-weight:700px;
`
const CategoriesItem = ({item}) => {
  return (
    
    <Container>
      <Link to={`/products/${item.cat}`}>
    <IMAGE src={item.img}/>
    <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
    </Info>
    </Link>
    </Container>
  )
}

export default CategoriesItem
