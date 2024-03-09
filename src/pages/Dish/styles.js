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

export const Main = styled.main`
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

export const MainText = styled.div`
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

export const Tags = styled.div`
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