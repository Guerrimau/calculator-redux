import React from 'react'
import { useSelector } from 'react-redux'
import { styled } from 'styled-components'

export const Result = () => {
  const { currentNumber, result } = useSelector(state => state.calculator);

  return (
    <ResultContainer>
        <ReultText>{result || currentNumber || 0}</ReultText>
    </ResultContainer>
  )
}

const ResultContainer = styled.div`
    background-color: hsl(224, 36%, 15%);
    display: flex;
    flex-direction: row-reverse;
    overflow: auto;
    padding: 25px 20px;
    border-radius: 5px;
    margin: 20px 0;
`;

const ReultText = styled.div`
    font-size: 35px;
    font-weight: 700;
`;