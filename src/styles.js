import styled from "styled-components"


export const ConverterDiv = styled.div`
  background: rgba(13, 82, 13, 0.895);
  width: 100%;
  height: 100vh;
`

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content-center;
  width: 100%;
  // margin-left: 50%;
  // position: relative;
  // margin-left: 10%;
  // margin-top: 10%;

  h1 {
    margin-top: 18%;
    font-size: 45px;
    margin-left: -1%;
  }


  input {
    border-radius: 10px;
    border: none;
    height: 25px;
    width: 70%;
    padding: 10px;
    background: white;
    
    color: rgba(13, 82, 13, 0.895);
  }

  input[type="number"] {
    font-size: 20px;
    font-weight: bold;
  }

  select {
    height: 50px;
    border-radius: 10px;
    margin-left: 10px;
    color: rgba(13, 82, 13, 0.895);
    background: white;
    padding: 10px;
    font-weight: bold;
  }
`