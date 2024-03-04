import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 104px;

    background-color: ${({ theme }) => theme['dark-600']};
`

export const Content = styled.div`
    width: 100%;
    max-width: 85.5rem;

    padding: 24px 123px;

    @media(max-width: 1024px) {
        padding: 20px;
    }
`

export const MainBar = styled.div`
    display: flex;
    align-items: center;

    height: 56px;
    width: 100%;
    max-width: 1122px;

    > img {
        height: 30px;
        width: 197px;
    }

    @media(max-width: 1146px) {
        justify-content: space-between;
    }

    @media(max-width: 425px) {
        > img {
            width: 128px;
            height: 25px;
        }
    }
`

export const MenuMobile = styled.div`
    display: none;

    @media(max-width: 1146px) {
        display: flex;
        align-items: center;

        > svg {
            width: 24px;
            height: 26px;
        }
    }

    @media(max-width: 425px) {
        > svg {
            height: 18px;
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

        gap: 8px;

        width: 100%;
        height: 56px;
        max-width: 216px;

        > span {
            font-size: 14px;
            font-weight: 600;
        }
        
        margin-right: 32px;

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
            height: 18px;
        }

        > button {
            > img {
                height: 18px;
            }
        }
    }
`

export const Search = styled.div`
    display: flex;
    gap: 14px;
    align-items: center;

    width: 100%;
    height: 48px;
    max-width: 581px;

    margin: 0 32px;
    padding: 12px 99px;

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
        padding: 12px 0 12px 20px;
    }

    @media(max-width: 1146px) {
       display: none;
    }
`