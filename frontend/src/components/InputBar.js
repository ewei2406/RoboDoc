import styled from 'styled-components'

const Mainbar = styled.input`
    border-radius: 30px;
    width: 500px;
    height: 60px;
    padding: 0 65px 0 30px;
    border: none;
    box-shadow: inset 0 0 5px grey;
`

const Submit = styled.button`
    border-radius: 20px;
    margin-left: -50px;
    width: 40px;
    height: 40px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6b55b9;
    cursor: pointer;
    transition: .2s ease;

    &:hover {
        background-color: #d4b6e6;
    }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const InputBar = ({ value, handler, submitHandler }) => {

    const items = [
        "I'm feeling...",
        "It hurts when I...",
        "I'm wheezing and coughing...",
        "Yesterday I fell..."
    ]

    return (
        <Wrapper>
            <Mainbar 
                type="text" 
                value={value} 
                onChange={e => handler(e.target.value)} 
                placeholder={items[Math.floor(Math.random() * items.length)]}
                onKeyDown={e => {if (e.key === 'Enter') {submitHandler()}}}
                />
            <Submit onClick={submitHandler}>
                <i class="bi bi-arrow-right-short" style={{"fontSize": "35px", "color" : "white"}}></i>
            </Submit>
        </Wrapper>
    )
}

export default InputBar