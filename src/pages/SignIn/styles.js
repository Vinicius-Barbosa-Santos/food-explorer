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
    padding: 90.12px 108px 112.88px 153.86px;

    @media(max-width: 1161px) {
        height: auto;

        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    @media(max-width: 780px) {
        height: auto;
        padding: 0;
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
        align-items: flex-start;

        > img {
            margin-bottom: 4.563rem;
        }
    }

    @media(max-width: 1421px) {
        margin-right: auto;
    }

    @media(max-width: 780px) {
       > img {
            height: 2.75rem;
            width: 17.378rem;
       }
    }

    @media(max-width: 375px) {
        margin-bottom: 1.875rem;

        > img {
            height: 2.75rem;
            width: 14.378rem;
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

        font-size: 32px;
        font-weight: 500;

        margin-top: 4rem;
        margin-bottom: 2rem;

        @media(max-width: 1161px) {
            display: none;
            margin-top: 0;
        }
    }

    > button {
        width: 100%;

        border: 0;
        padding: 0.75rem 2rem;
        border-radius: 5px;

        > span {
            font-weight: 600;
            color: ${({ theme }) => theme['light-100']};
        }

        background-color: ${({ theme }) => theme['tints-100']};
    }

    > button:hover {
       cursor: pointer;
    }

    > footer {
        text-align: center;
        margin: 2rem auto 4rem;
    }
`

export const LabelBlock = styled.div`
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