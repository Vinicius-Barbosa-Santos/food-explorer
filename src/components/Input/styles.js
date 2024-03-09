import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 2rem;

    label {
        display: block;
        margin-bottom: 0.625rem;

        color: ${({ theme }) => theme['light-400']};
    }

    input {
        width: 100%;

        padding: 0.875rem;

        border: 0;
        background: none;
        border-radius: 8px;
        color: ${({ theme }) => theme['light-100']};
        background-color: ${({ theme }) => theme['dark-400']};

        @media(max-width: 1161px) {
            background-color: ${({ theme }) => theme['dark-900']};
        }
    }

    @media(max-width: 375px) {
        margin-top: 1.25rem;
    }
`