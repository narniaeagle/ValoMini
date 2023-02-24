import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Data () {
 

    const [agent, setAgent] = useState({})

    useEffect(() => {
        const url = 'https://valorant-api.com/v1/agents'
        const getAgents = async () => {
            const response = await axios.get(url)
            console.log(response.data)
            setAgent(response.data)
        }
        getAgents()
    },[])

    console.log(agent.data)


    if(agent.data){
    return (  
        <div>
            <div className="agents-grid">
            {agent.data.map((info) =>
            info.isPlayableCharacter ?
            <div key ={info.uuid}  className="agents-container" style={{backgroundColor:"#"+(info.backgroundGradientColors[3])}}>
                <div className="agents-wrap">
            <h2 className="agent-name" style={{backgroundColor:"#"+(info.backgroundGradientColors[2]), color:"#"+(info.backgroundGradientColors[1]) }}>{info.displayName}</h2>
            <img src={info.fullPortrait} style={{maxWidth:"24rem",maxHeight:"24rem", backgroundColor:"#"+(info.backgroundGradientColors[0]), borderRadius:"8rem"}}/>
            </div>
            </div>: null
            )}
            </div>
        </div>
    )}
    else{
        return(
            <h1>Loading</h1>
        )
    }
  }