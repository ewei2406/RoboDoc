import * as tf from '@tensorflow/tfjs'
import React, { useState, useEffect } from 'react'
import modelService from './services/modelService'
import InputBar from './components/InputBar'
import Output from './components/Output'
import Title from './components/Title.js'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const App = () => {

    const [model, setModel] = useState(null)
    const [labels, setLabels] = useState([])
    const [weights, setWeights] = useState([])
    const [symptoms, setSymptoms] = useState([])

    const [userInput, setUserInput] = useState("")
    const [output, setOutput] = useState([])

    useEffect(() => {
        async function loadModel() {
            const res = await tf.loadLayersModel('/tfjs/model.json');
            setModel(res)
        }

        loadModel()

        modelService.getLabels().then(res => {
            setLabels(res)
        })

        modelService.getSymptoms().then(res => {
            setSymptoms(res)
        })

        modelService.getWeights().then(res => {
            setWeights(res)
        })

    }, [])

    const getMaxIndices = (input_arr, count) => {
        const sorted = input_arr.slice().sort().reverse()
        const max_vals = sorted.slice(0, count)

        const output = max_vals.map(val => input_arr.indexOf(val))
        console.log(output);
        return output
    }

    const ClickHandler = () => {

        let inputArray = new Array(399).fill(0)

        const alteredPhrase = userInput.toLowerCase().match(/\w+/gm) || []

        alteredPhrase.map(word => {
            symptoms.map((symptom, index) => {
                if (symptom.split(" ").includes(word)) {
                    inputArray[index] = 1
                }
            })
        })

        console.log(symptoms);

        if (inputArray.reduce((partial_sum, a) => partial_sum + a, 0) === 0) {
            setOutput(["Not found"])
            return
        }

        let res = "model not loaded"

        if (model && weights) {
            let pred = model.predict(tf.tensor([inputArray]))
            res = Array.from(pred.dataSync())
            res = res.map((r, i) => r * weights[i])
            res = getMaxIndices(res, 3)
        }

        setOutput(res.map(i => labels[i]))
    }

    // console.log(symptoms);

    return (
        <Wrapper>
            <Title/>
            <InputBar 
            value={userInput} 
            handler={setUserInput}
            submitHandler={ClickHandler}
            />
            <Output outputArr={output}/>
        </Wrapper>
    )
}
export default App