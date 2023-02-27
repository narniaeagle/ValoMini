import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function AgentsDetails ()  {
    const [agent, setAgent] = useState([]) 


    const { agents_id } = useParams()

    useEffect(() => {
            const url = 'https://valorant-api.com/v1/agents'
            const getAgents = async () => {
                const response = await axios.get(url)
                setAgent(response.data.data) 
            }
            getAgents()
        },[])
    let slct = agent.find(
      (a) => a.uuid === agents_id
    )

        console.log(slct)
        if(slct){
  return (
    <div>
        <div className="agent-container">
            <div className="agent-left">
                <h3>Skills</h3>
                {slct.abilities.map((i) =>
                <div>
            <h4 className="agent-description">{i.slot}</h4>
            <h5 className="agent-description">{i.displayName}</h5>
            {i.displayIcon ?<img src={i.displayIcon} alt="Icon" style={{ maxWidth:"30%"}}/>
            :<h6>Passives don't have an image at the moment</h6>
            }
            </div>
            )}
            </div>
            <div className="agent-middle">
            <h2>{slct.displayName}</h2>
            <img src={slct.fullPortrait} alt="Agent" style={{border:'solid red 5px', maxWidth:'100%', height:'auto'}}/>
            <h4>Details</h4>
            <h5 className="agent-description">{slct.description}</h5>
            </div>
            <div className="agent-right">
            {slct.abilities.map((i) =>
            <div>
                 <h4 className="agent-description">{i.displayName}</h4>
                <h5>{i.description}</h5>
            </div>
            )}
            </div>
      

        </div>
    </div>
  ) }
  else return (<h1>Loading</h1>)
}
