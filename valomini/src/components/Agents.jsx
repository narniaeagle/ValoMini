import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Data } from "../Data";
import { useNavigate } from "react-router-dom"

export default function Agents () {
 

    const [agent, setAgent] = useState({})
    const { info, setInfo } = useContext(Data)
    let navigate = useNavigate()

    useEffect(() => {
        const url = 'https://valorant-api.com/v1/agents'
        const getAgents = async () => {
            const response = await axios.get(url)
            setAgent(response.data)
        }
        getAgents()
    },[])

    const showAgent = (i) => {
        setInfo({...info, search: ''})
        navigate(`${i.uuid}`)
      }


    if(agent.data){
    return (  
        <div>
            <div className="grid">
            {agent.data.map((i) =>
            (i.isPlayableCharacter && i.displayName.toLowerCase().includes(info.search.toLowerCase())) || (i.isPlayableCharacter && info.search === '') ?
            <div key ={i.uuid} onClick={() => showAgent(i)} className="agents-card" style={{backgroundColor:"#"+(i.backgroundGradientColors[3])}}>
                <div className="agents-wrap">
            <h2 className="agent-name" style={{backgroundColor:"#"+(i.backgroundGradientColors[2]), color:"#"+(i.backgroundGradientColors[1]) }}>{i.displayName}</h2>
            <img src={i.fullPortrait} alt="Agent" style={{backgroundColor:"#"+(i.backgroundGradientColors[0]), borderRadius:"8rem", maxWidth:'100%', height:'auto'}}/>
            </div>
            </div>: null
            )}
            </div>
        </div>
    )}
    else{
        return(
            <h1 className='loading'>Loading...</h1>
        )
    }
  }