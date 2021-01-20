import styled from 'styled-components'

export const FormContainer = styled.div`
    padding: 32px;
    width: 400px;
    flex: 400px;
    text-align: center;
    p{
        font-size: 14px;
        text-align: left;
    }
    & h1 {
        text-align: left;
    }
    & h2 {
        font-size: 14px;
        font-weight: 300;
        margin: 12px;
    }
    & h3 {
        font-size: 13px;
    }
    & h3#booth-selection-form-number {
        margin-top: 24px;
        color: #618572;
        font-size: 42px;
        font-weight: 700;
    }
    & > *{
        padding: 16px;
        max-width: 400px;
        margin: auto;
    }
    & div{
        border-bottom: 2px solid #E4EBE8;
        text-align: center;
        min-height: 160px;
    }
    & div:nth-child(5n) {
        border: none;
    }
    & button {
        transition: all linear 300ms;
        background: #618572;
        padding: 0px;
        font-size: 16px;
        font-weight: 600;
        color: white;
        letter-spacing: 0.01em;
        font-style: normal;
        border: none;
        height: 40px;
        width: 312px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
    }
    & button:disabled {
        background: #c6cac7;
        color: #d9e0e0;
        box-shadow: none;
    }
    & img {
    }
`