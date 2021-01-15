import styled from 'styled-components'

export const OPVeteran = styled.p`
    margin: 0px;
    width: 328px;
    height: 24px;
    position: relative;
    top: 104px;
    left: calc(50% - 328px/2);
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #545454;
    &::after {
        content: "OP Veteran"
    }
`
export const VetFest = styled.h3`
    margin: 0px;
    width: 328px;
    height: 32px;
    position: relative;
    top: 104px;
    left: calc(50% - 328px/2);
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 0.015em;
    color: #545454;
    &::after{
        content: "VetFest Registration"
    }
`

export const RegisterWith = styled.p`
    margin: 0px;
    width: 328px;
    position: relative;
    top: 192px;
    left: calc(50% - 328px/2);
    height: 24px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #545454;
    &::after{
        content: "Register and sign in with"
    }
`

export const Or = styled.p`
    margin: 0px;
    width: 328px;
    position: relative;
    top: 256px;
    left: calc(50% - 328px/2);
    height: 24px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #545454;
    &::after{
        content: "Or with e-mail"
    }
`

export const Container = styled.div`
    height: 100%;
    position: relative;
    background: #FFFFFF;

& > .email-input {
    position: relative;
    top: 296px;
    left: calc(50% - 328px/2);
}

& > .pass-input {
    position: relative;
    top: 324px;
    left: calc(50% - 328px/2);
}

    & > .short-button {
        width: 148px;
    }
}
`