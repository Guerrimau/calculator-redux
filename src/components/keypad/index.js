import React from 'react'
import { styled } from 'styled-components'

export const Keypad = () => {
  return (
    <KeypadContainer>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>DEL</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>+</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>-</Button>
      <Button>.</Button>
      <Button>0</Button>
      <Button>/</Button>
      <Button>x</Button>
      <Button>RESET</Button>
      <Button>=</Button>
    </KeypadContainer>
  )
}

const KeypadContainer = styled.div`
    background-color: hsl(223, 31%, 20%);
    border-radius: 5px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 40px);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding: 20px;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
  background-color: hsl(30, 25%, 89%);
  box-shadow: 0px 3px 0px 0px  hsl(28, 16%, 65%);
  color: hsl(221, 14%, 31%);
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  border-radius: 5px;
  padding-top: 5px;

  &:active {
    background-color: white;
  }
`;