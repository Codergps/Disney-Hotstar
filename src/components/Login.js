import React from 'react'
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <CTA>
                <CTAlogoOne src="cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>leaders interested in learning more about science fiction in literary and cinematic studies will welcome this selection of freely available Oxford Bibliographies articles. This collection spans various disciplines in order to further illuminate the major themes and works in the field.</Description>
                <CTAlogoTwo src="cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login;

const Container = styled.div`
position: relative;
height: calc(100vh - 70px);
display: flex;
align-items: top;
justify-content: center;

&:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("login-background.jpg");
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    z-index: -1;
}
`
const CTA = styled.div`
max-width: 650px;
padding: 80px 40px;
width: 90%;
display: flex;
flex-direction: column;
margin-top: 100px;
align-items: center;
`
const CTAlogoOne = styled.img`

`

const SignUp = styled.a`
width: 100%;
background-color: #0063e5;
font-weight: bold;
padding: 17px 0;
color: #f9f9f9;
border-radius: 4px;
text-align: center;
font-size: 18px;
cursor: pointer;
transition: all 250ms;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom: 12px;

&:hover{
    background: #0483ee;
}
`
const Description = styled.div`
font-size: 11px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
`
const CTAlogoTwo = styled.img`
width: 90%;
margin-top: 10px;
`