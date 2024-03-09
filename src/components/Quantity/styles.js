import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 2.063rem;
    align-items: center;

    width: 100%;

    height: 3rem;
    margin-top: 3rem;
    max-width: 18.375rem;

    > button {
        border: 0;

        height: 3rem;
        max-width: 10.125rem;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0 5px;
        cursor: pointer;

        > span {
            font-size: 0.875rem;
        }

        @media(max-width: 427px) {
            > span {
                font-size: 0.688rem;
            }
        }
    }

    @media(max-width: 1024px) {
        max-width: 100%;

        padding: 0 0.625rem;
        justify-content: space-between;
    }

    @media(max-width: 427px) {
        gap: 0;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    gap: 0.875rem;

    > span {
        font-size: 1.25rem;
        font-weight: 600;
    }

    > button {
        border: 0;
        background: transparent;

        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;

        color: ${({ theme }) => theme['light-100']};
    }

    height: 2rem;
    max-width: 6.188rem;

    @media(max-width: 427px) {
        gap: 0.625rem;
    }
`