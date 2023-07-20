import React from "react";
import { styled } from "styled-components";
import { Result } from "./components/result";
import { Keypad } from "./components/keypad";
import { Header } from "./components/header";

export const CalculatorApp = () => {
  return (
    <MainContainer>
        <CalculatorContainer>
            <Header />
            <Result />
            <Keypad />
        </CalculatorContainer>
    </MainContainer>
  )
}

const MainContainer = styled.main`
    background-color: hsl(222, 26%, 31%);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

const CalculatorContainer = styled.div`
    width: 375px;
`;