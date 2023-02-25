import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Data } from "../Data";
import { useParams } from 'react-router-dom'

export default function AgentsDetails ()  {
    const [weapon, setWeapon] = useState([])
    const { info, setInfo } = useContext(Data)

    const { weapons_id } = useParams()

    useEffect(() => {
            const url = 'https://valorant-api.com/v1/weapons'
            const getAgents = async () => {
                const response = await axios.get(url)
                setWeapon(response.data.data) 
            }
            getAgents()
        },[])
    let slct = weapon.find(
      (a) => a.uuid === weapons_id
    )

        console.log(slct)
  return slct ? (
    <div>
        <div className="agents-grid">
        
        {slct.skins.map((i) =>
        (i.displayName.toLowerCase().includes(info.search.toLowerCase())) || (i.displayName && info.search === '') ?
                <div>
            <h4 className="agent-description">{i.slot}</h4>
            <h5 className="agent-description">{i.displayName}</h5>
            <img src={i.levels[0].displayIcon} alt="Icon" style={{ maxWidth:"100%", height:'auto'}}/>

            </div>:null
      )}

        </div>
    </div>
  ) : null
}
