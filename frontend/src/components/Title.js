import styled from "styled-components"

const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;
    color: white;
`

const Title = () => {
    return (
        <TitleWrapper>
            <h1>🤖 RoboDoc</h1>
            <h6>Tell me how you're feeling today!</h6>
            <h5>Disclaimer: Not a valid substitute for a real diagnosis. Please consult a doctor if you are truly experience worrying symptoms.</h5>

        </TitleWrapper>
    )
}

export default Title