import React from 'react'
import styled from 'styled-components'
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios"
import {useState,useEffect} from 'react';

const PUBLIC_KEY = "pk_test_51LMC1UBzIrI8f3hBFOXEodV9ae4MrbaTUvgB00VUYMkHCGvfMPtviNSnphBhyIsZDunxsUWbiWMLiZn1KTpBA0q2000Dl9eN79";
const Container=styled.div`
height:100vh;
margin-bottom:10px;
display:flex;   
align-items:center;
justify-content:center;`


const Button=styled.button`
display:flex;
justify-content: center;
align-items:center;
border-radius:14px;
background-color:black;
color:white;
width:300px;
height:40px;
padding:20px;
margin:40px;
font-size: 30px;
cursor:pointer`
const Pay = () => {
    const [stripeToken,setStripeToken]=useState(null);
    const onToken = (token) => {
        setStripeToken(token);
    }
    useEffect(()=>{
        const requestGenerate= async()=>{
            try{
               const res= await axios.post("http://localhost:5000/api/checkout/payment",
                {
                    tokenID:stripeToken.id,
                    amount:2000,
                });
                console.log(res.data);
            }
            catch(err){
                console.log(err);
            }
        };
        stripeToken && requestGenerate(); 
    },[stripeToken]);

    

return (
    <> 
    <Container>
    <StripeCheckout
    name="Ibbi Shoes" // the pop-in header title
    description="Your total is $20" // the pop-in header subtitle
    image="../images/image1.png" // the pop-in header image (default none)
    shippingAddress
    billingAddress={false}
    amount={2000} // cents
    currency="USD"
    token={onToken}
    stripeKey={PUBLIC_KEY }
    >
      <Button>PAY NOW</Button>
      </StripeCheckout>
    </Container>
    
    </>
  )
}

export default Pay
