import styled from "styled-components";

const MainContainer = styled.div`
    display: grid;
    color: white;
    padding: 1rem;
    margin: auto;
    gap: 0.5rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

const Main = ({ shuffleOnClick, arr }) => {
    return (
        <MainContainer>
            {arr.map((elem) => {
                return <div className="imgDiv" onClick={shuffleOnClick}>{elem}</div>
            })}
        </MainContainer>
    )
}

export default Main;