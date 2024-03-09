import styled from "styled-components";

export const Container = styled.button`
    width: 100%;

    cursor: pointer;

    border: 0;
    padding: 0.75rem 2rem;
    border-radius: 5px;

    background-color: ${({ theme }) => theme['tints-100']};
`