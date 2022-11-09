import styled from "styled-components";

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;
    height: 3rem;
    width: 100%;
    background-color: #CFD2CF;
    gap: 0.5rem;
`

const Footer = () => {
    return (
        <FooterContainer>
            Copyright © 2022 Zahin
            <a href='https://github.com/Wase-Zahin'>
                <img
                    className='icon'
                    src={require('../../icons&pics/github-icon.png')}
                    alt='github'>
                </img>
            </a>
        </FooterContainer>
    )
}

export default Footer;