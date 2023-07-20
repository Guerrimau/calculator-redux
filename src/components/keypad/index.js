import React from 'react';
import { useDispatch } from 'react-redux';
import { css, styled } from 'styled-components';
import { calculatorKeys } from '../../utils/calculator-keys';
import { addNumber, delNumber, resetValues, addOperator, calculateValues } from "../../app/reducers/calculatorSlice";


export const Keypad = () => {
  const dispatch = useDispatch();

  const onKeyClick = (keyValue) => {
    switch (keyValue) {
      case "+":
      case "-":
      case "x":
      case "/":
        dispatch(addOperator(keyValue))  
        break;

      case "=":
        dispatch(calculateValues())
        break;
        
      case "DEL":
        dispatch(delNumber(keyValue));
        break;

      case "RESET":
        dispatch(resetValues());
        break;

      default:
        dispatch(addNumber(keyValue));
        break;
    }
  }

  return (
    <KeypadContainer>
      {calculatorKeys.map(key => {
        return (
          <Button
            large={Boolean(key.large)}
            variant={key.variant}
            onClick={() => onKeyClick(key.value)}>
            {key.value}
          </Button>
        )
      })}
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
  font-weight: 700;
  text-align: center;
  border-radius: 5px;
  padding-top: 5px;

  &:active {
    filter: brightness(120%);
  }

  font-size: ${({ children }) => children.length > 1 ? "22px" : "30px"};
  grid-column: span ${props => props.large ? "2" : "1"};

  ${({ variant = "primary" }) => {
    if (variant === "secondary") {
      return css`
        background-color: hsl(225, 21%, 49%);
        box-shadow: 0px 3px 0px 0px  hsl(224, 28%, 35%);
        color: white;
      `
    }
    if (variant === "accent") {
      return css`
        background-color: hsl(6, 63%, 50%);
        box-shadow: 0px 3px 0px 0px  hsl(6, 70%, 34%);
        color: white;
      `
    }
  }};
`;