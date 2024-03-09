import styled from "styled-components";

export const Container = styled.div`
    display: inline-block;

    padding: 0.625rem;
    
    text-align: center;
    border-radius: 8px;
    margin-right: 0.625rem;
    margin-bottom: 0.625rem;

    color: ${({ theme }) => theme['light-100']};
    background-color: ${({ theme }) => theme['dark-1000']};

    @media(max-width: 1400px) {
        margin: 10px;
    }
`