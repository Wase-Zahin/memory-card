import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 4rem;
    border: 2px solid black;
    padding: 1rem;
`
const Header = () => {
    return (
        <HeaderContainer>
            <h1>Current Score:</h1>
            <h1>Best Score:</h1>
        </HeaderContainer>
    )
}

export default Header;