import React from 'react'
import Navbar from './component/Navbar'
import Checkout from './component/Checkout'
import Footer from './component/Footer'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #fbf6e9;
  .checkoutp {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap:wrap;
    // flex-direction:column-reverse;
  }
`;

function CheckoutPage() {
  return (
  <Wrapper>
    <Navbar />
    <Checkout />
    <Footer />
  </Wrapper>
  )
}

export default CheckoutPage