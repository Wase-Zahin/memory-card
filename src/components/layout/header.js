import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 1px 2px 1px #377D71;
    background-color: #42855B;
`
const Header = ({ currentScore, bestScore }) => {
    return (
        <HeaderContainer>
            <h1>Memory Game </h1>
            <div>
                <h3>Current Score: {currentScore}</h3>
                <h3>Best Score: {bestScore}</h3>
            </div>
        </HeaderContainer>
    )
}

export default Header;