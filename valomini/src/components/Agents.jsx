import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Data } from "../Data";

export default function Agents () {
 

    const [agent, setAgent] = useState({})
    const { info, setInfo } = useContext(Data)

    useEffect(() => {
        const url = 'https://valorant-api.com/v1/agents'
        const getAgents = async () => {
            const response = await axios.get(url)
            setAgent(response.data)
        }
        getAgents()
    },[])


    if(agent.data){
    return (  
        <div>
            <div className="agents-grid">
            {agent.data.map((i) =>
            i.isPlayableCharacter && i.displayName == info.agent || i.isPlayableCharacter && info.agent == '' ?
            <div key ={i.uuid}  className="agents-container" style={{backgroundColor:"#"+(i.backgroundGradientColors[3])}}>
                <div className="agents-wrap">
            <h2 className="agent-name" style={{backgroundColor:"#"+(i.backgroundGradientColors[2]), color:"#"+(i.backgroundGradientColors[1]) }}>{i.displayName}</h2>
            <img src={i.fullPortrait} style={{maxWidth:"24rem",maxHeight:"24rem", backgroundColor:"#"+(i.backgroundGradientColors[0]), borderRadius:"8rem"}}/>
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