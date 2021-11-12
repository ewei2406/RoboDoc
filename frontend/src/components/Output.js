import styled from "styled-components"

const DiseaseWrapper = styled.div`
    background: white;
    border-radius: 20px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    padding: 0 20px 0 5px;
`

const RankWrapper = styled.div`
    background-color: #6b55b9;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const NameWrapper = styled.div`
`

const Disease = ({ rank, name }) => {
    return(
        <DiseaseWrapper>
            <RankWrapper>{rank + 1}</RankWrapper>
            <NameWrapper>
                {name}
            </NameWrapper>
        </DiseaseWrapper>
    )
}

const OutputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 20px;
`

const Output = ({ outputArr }) => {
    if (outputArr.length === 0) {
        return (
            <div>
            </div>
        )
    } else {

        if (outputArr.length === 1) {
            return (
                <OutputWrapper>
                    <div style={{ "color": "white", "fontWeight": "bold" }}>
                        Sorry, I couldn't figure out what your symptoms are. Could you try being a bit more specific?
                    </div>
                </OutputWrapper>
            )
        }

        return (
            <OutputWrapper>
                <div style={{"color" : "white", "fontWeight" : "bold"}}>
                    You may be showing symptoms of:
                </div>
                {outputArr.map((disease, i) => <Disease name={disease} rank={i} key={disease} />)}
            </OutputWrapper>
        )
    }
}

export default Output