import { useState, useEffect, useContext } from 'react'
import { Data } from "../Data"
import axios from 'axios'

export default function Search () {
    const [ agent, setAgent ] = useState({})
    const { info, setInfo } = useContext(Data)
    
    useEffect(() => {
        const url = 'https://valorant-api.com/v1/agents'
        const getAgents = async () => {
            const response = await axios.get(url)
            setAgent(response.data)
        }
        getAgents()

    },[])

    function handleInput(e){
        e.preventDefault()

        setInfo({...info, agent: e.target.value})
    }

    return (
        <div>
            <form>
            <input placeholder='Viper' name="input" value={info.agent} onChange={handleInput}></input>
            </form>
        </div>
    )
}