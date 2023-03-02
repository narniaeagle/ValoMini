import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"

export default function AgentsDetails ()  {
    const [agent, setAgent] = useState([]) 


    const { agents_id } = useParams()

    let navigate = useNavigate()
    
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

    function previousPage(){
        navigate(-1)
    }

        if(slct){
  return (
    <div>
        <div className="agent-grid" style={{backgroundColor:"#"+(slct.backgroundGradientColors[3]), borderColor: "#"+(slct.backgroundGradientColors[0])}}>
            <div className="agent-left" style={{borderColor: "#"+(slct.backgroundGradientColors[0])}}>
                <h2 className="agent-title">Skills</h2>
                {slct.abilities.map((i, index) =>
                <div key={"leftrow-"+index}>
            <h4 key={"left-"+i.slot} className="agent-skillslot">{i.slot}</h4>
            <h5 key={"left-"+i.displayName} className="agent-skillname">{i.displayName}</h5>
            {i.displayIcon ?<img key={"skillimg-"+index} src={i.displayIcon} alt="Icon" style={{ maxWidth:"30%"}}/>
            :<h6>Passives don't have an image at the moment</h6>
            }
            </div>
            )}
            </div>
            <div className="agent-middle" style={{borderColor: "#"+(slct.backgroundGradientColors[0])}}>
            <h1 className="agent-name">{slct.displayName}</h1>
            <div className='agent-portrait'>

            <img src={slct.fullPortrait} alt="Agent" style={{ maxWidth:'100%', height:'auto', borderRadius:'5rem', backgroundImage:`url(${slct.background})`,backgroundSize:'cover'}}/>
            </div>
            <h4 className="agent-title">Details</h4>
            <h4 className="agent-description">{slct.description}</h4>
            </div>
            <div className="agent-right" style={{borderColor: "#"+(slct.backgroundGradientColors[0])}}>
                <h2 className="agent-title">Skill Descriptions</h2>
            {slct.abilities.map((i, index) =>
            <div key={"rightrow-"+index}>
                 <h4 key={"right-"+i.displayName} className="agent-skillname">{i.displayName}</h4>
                <h5 key={"right-"+index} className="agent-skilldescription">{i.description}</h5>
            </div>
            )}
            <div>
                <img onClick={previousPage} alt="back arrow icon" className="agent-backbutton" src="https://cdn-icons-png.flaticon.com/512/0/340.png"></img>
            </div>
            </div>
      

        </div>
    </div>
  ) }
  else return (<h1 className='loading'>Loading...</h1>)
}
