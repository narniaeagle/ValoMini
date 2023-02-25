import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Data } from "../Data";
import { useNavigate } from "react-router-dom"

export default function Agents () {
 

    const [weapon, setWeapon] = useState({})
    const { info, setInfo } = useContext(Data)
    let navigate = useNavigate()

    useEffect(() => {
        const url = 'https://valorant-api.com/v1/weapons'
        const getAgents = async () => {
            const response = await axios.get(url)
            setWeapon(response.data)
        }
        getAgents()
    },[])

    const showWeapon = (i) => {
        navigate(`${i.uuid}`)
      }
      console.log(weapon.data)

    if(weapon.data){
    return (  
        <div>
            <div className="agents-grid">
            {weapon.data.map((i) =>
            (i.displayName.toLowerCase().includes(info.search.toLowerCase())) || (i.category.split("::")[1].toLowerCase().includes(info.search.toLowerCase())) || (i.displayName && info.search === '') ?
            <div key ={i.uuid} name={i.category.split("::")[1]} onClick={() => showWeapon(i)} className="agents-card" style={{}}>
                <div className="agents-wrap">
            <h2>{i.displayName}</h2>
            <img src={i.displayIcon} alt="Agent" style={{ maxWidth:'100%', height:'auto'}}/>
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