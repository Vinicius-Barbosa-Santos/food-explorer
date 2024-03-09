import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;

    @media(max-width: 450px) {
        padding: 0 1.25rem;
    }
`

export const Content = styled.div`
    width: 100%;
    max-width: 85.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 auto;
    padding: 5.633rem 6.75rem 7rem 9.563rem;

    @media(max-width: 1161px) {
        height: auto;

        padding: 0;

        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
`

export const LogoImage = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    height: 100%;
    margin-right: 19.134rem;

    @media(max-width: 1161px) {
        width: 100%;

        flex-direction: row;
        justify-content: center;
        align-items: center;

        > img {
            margin-left: -2.5rem;
            margin-bottom: 4.563rem;
        }
    }

    @media(max-width: 1421px) {
        margin-right: auto;
    }

    @media(max-width: 375px) {
        margin-bottom: 1.875rem;

        > img {
            margin-left: 0;

            height: 2.75rem;
            width: 16.378rem;
            margin-bottom: 0px;
       }
    }
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 29.75rem;
    border-radius: 16px;
    background-color: ${({ theme }) => theme['dark-700']};

    @media(max-width: 1161px) {
        height: auto;
        background-color: transparent;
    }
`

export const FormContent = styled.div`
    width: 100%;
    max-width: 21.75rem;

    header > h2 {
        text-align: center;

        font-size: 2rem;
        font-weight: 500;

        margin-top: 4rem;
        margin-bottom: 2rem;

        @media(max-width: 1161px) {
            display: none;
            margin-top: 0;
        }
    }
    
    > footer a {
        display: block;

        color: #fff;
        text-align: center;
        margin: 2rem auto 4rem;

        &:focus {
            outline: 0;
            box-shadow: none;
        }
    }
`