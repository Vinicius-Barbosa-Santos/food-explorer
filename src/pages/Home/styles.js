import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 6.5rem auto 4.813rem;

    grid-template-areas:
        "header"
        "content"
        "footer"
    ;
`

export const Content = styled.div`
    margin: 0 auto;

    width: 100%;
    max-width: 70.25rem;
`

export const Footer = styled.footer`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme['dark-600']};
`

export const FooterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.5rem 7.688rem;

    width: 100%;
    max-width: 76.375rem;

    > span {
        font-weight: 500;
        font-size: 0.875rem;
    }

    @media(max-width: 780px) {
        padding: 1.25rem;
    }

    @media(max-width: 560px) {
        > img {
            width: 8rem;
            height: 1.563rem;
        }

        > span {
            font-size: 0.75rem;
        }
    }

    @media(max-width: 419px) {
        display: flex;
        flex-direction: column;

        > span {
            margin-top: 0.313rem;
        }
    }
`