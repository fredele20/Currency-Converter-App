import React from 'react'
import "./style.js"
import { Background, FlexBack } from "./style"
import image from "./conv.jpg"


export default function LandingPage() {
  return (
    <Background>
      <FlexBack>
        <div>
          <h1>All major countries</h1>
          <p>View the conversion result for all currencies on one screen with the first option</p>
        </div>
        <div>
          <img src={ image } alt="" />
        </div>
      </FlexBack>
    </Background>
  )
}
