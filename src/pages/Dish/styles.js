import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`

export const Content = styled.div`
    margin: 0 auto;

    width: 100%;
    max-width: 70.25rem;

    > a {
        width: 100%;
        max-width: 6.75rem;

        margin-top: 1.5rem;

        display: flex;
        align-items: center;

        text-transform: lowercase;
    }

    > a span {
        color: #fff;

        font-size: 1.5rem;
        font-weight: bold;
    }

    @media(max-width: 1400px) {
        max-width: 80%;
    }
`

export const DishContent = styled.main`
    margin-top: 2.625rem;

    display: flex;
    gap: 2.989rem;
    align-items: center;

    > img {
        width: 100%;

        max-width: 24.375rem;
        height: 24.375rem;
    }

    @media(max-width: 1024px) {
        margin-bottom: 1.875rem;
        flex-direction: column;
    }

    @media(max-width: 570px) {
        > img {
            height: 16.5rem;
            width: 16.5rem;
        }
    }
`

export const DishText = styled.div`
    > h1 {
        font-size: 2.5rem;
        font-weight: 500;
    }

    p {
        padding: 0;
        margin-top: 1.5rem;

        font-size: 1.5rem;
        font-weight: 300;
    }

    @media(max-width: 1024px) {
        text-align: center;
    }

    @media(max-width: 570px) {
        > h1 {
            font-size: 0.106rem;
        }

        p {
            font-size: 1.014rem;
        }
    }
`

export const GridItems = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    margin-top: 1.5rem;
    margin-bottom: 3rem;

    @media(max-width: 1400px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 320px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const QuantityText = styled.div`
    display: flex;
    gap: 2.063rem;
    align-items: center;

    width: 100%;

    height: 3rem;
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
        
        width: 100%;
        border-radius: 0.313rem;
        background-color: ${({ theme }) => theme['tints-100']};

        > span {
            font-size: 0.875rem;
            font-weight: 100;

            color: ${({ theme }) => theme['light-100']};
        }

        @media(max-width: 427px) {
            > span {
                font-size: 0.688rem;
            }
        }
    }

    margin-top: 3rem;

    @media(max-width: 1024px) {
        max-width: 100%;

        padding-right: 0.625rem;
        justify-content: space-between;
    }

    @media(max-width: 427px) {
        gap: 0;
    }
`

export const QuantityTextContent = styled.div`
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