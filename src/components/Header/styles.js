import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 6.5rem;

    background-color: ${({ theme }) => theme['dark-600']};
`

export const Content = styled.div`
    width: 100%;
    max-width: 85.5rem;

    padding: 1.5rem 7.688rem;

    @media(max-width: 780px) {
        padding: 1.25rem;
    }
`

export const MainBar = styled.div`
    display: flex;
    align-items: center;

    height: 3.5rem;
    width: 100%;
    max-width: 70.125rem;

    > img {
        height: 1.875rem;
        width: 12.313rem;
    }

    @media(max-width: 1146px) {
        justify-content: space-between;
    }

    @media(max-width: 425px) {
        > img {
            width: 8rem;
            height: 1.563rem;
        }
    }
`

export const MenuMobile = styled.div`
    display: none;

    @media(max-width: 1146px) {
        display: flex;
        align-items: center;

        > svg {
            width: 1.5rem;
            height: 1.625rem;
        }
    }

    @media(max-width: 425px) {
        > svg {
            height: 1.125rem;
        }
    }
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: center;

    > button {
        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        gap: 0.5rem;

        width: 100%;
        height: 3.5rem;
        max-width: 13.5rem;

        > span {
            font-weight: 600;
            font-size: 0.875rem;
        }
        
        margin-right: 2rem;

        border: 0;
        border-radius: 5px;
        color: ${({ theme }) => theme['light-100']};
        background-color: ${({ theme }) => theme['tints-100']};
    }

    > svg {
        flex-shrink: 0;
    }

    .logout {
        cursor: pointer;
    }

    @media(max-width: 1146px) {
        width: auto;

        > svg {
            display: none;
        }

        > button {
            margin-right: 0;
            background: transparent;

            > span {
                display: none;
            }
        }
    }

    @media(max-width: 425px) {
        > svg {
            height: 1.125rem;
        }

        > button {
            > img {
                height: 1.125rem;
            }
        }
    }
`

export const Search = styled.div`
    display: flex;
    gap: 0.875rem;
    align-items: center;

    width: 100%;
    height: 3rem;
    max-width: 36.313rem;

    margin: 0 2rem;
    padding: 0.75rem 6.188rem;

    border-radius: 5px;

    > input {
        width: 100%;

        border: 0;
        outline: 0;
        background: none;
        color: ${({ theme }) => theme['light-100']};;
    }

    > input:focus {
        outline: 0;
        box-shadow: none;
    }

    border: 0;
    background-color: ${({ theme }) => theme['dark-900']};

    @media(max-width: 1400px) {
        padding: 0.75rem 0 0.75rem 1.25rem;
    }

    @media(max-width: 1146px) {
       display: none;
    }
`