import React from 'react'
import { styled } from 'styled-components'

export const Header = () => {
    return (
        <div>
            <Title>calc</Title>
        </div>
    )
}

const Title = styled.p`
    font-size: 20px;
    font-weight: 700;
`;
