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
      //console.log(weapon.data)


      let lastCategory = ''
      function categories(i){
        if(i.category.split("::")[1] !== lastCategory){
            lastCategory= i.category.split("::")[1]
            return(
                <button value={i.category.split("::")[1]} onClick={showCategories}>{i.category.split("::")[1]}</button>
            )
        }
      }

      function showCategories(e){
        if(info.search2 !== e.target.value){
            setInfo({...info, search2: e.target.value})
        }
        else if (info.search2 === e.target.value){
            setInfo({...info, search2: ''})
        }
      }

    if(weapon.data){
    return (  
        <div>
            {weapon.data.map((i) => categories(i) 
            )}

            <div className="agents-grid">
            {weapon.data.map((i) =>
            ( i.displayName.toLowerCase().includes(info.search.toLowerCase()) && (i.category.split("::")[1].includes(info.search2) && info.search2 !== '')) || // search2 buttons pressed inside search
             ( i.displayName.toLowerCase().includes(info.search.toLowerCase()) && info.search2 === '') || // search2 is disabled all search
              (i.category.split("::")[1].toLowerCase() === info.search.toLowerCase()) || // search by tags
               (info.search === '' && info.search2 === '')  ? // show all if search (searchbar) and search2 (buttons) are empty
            <div key ={i.uuid} name={i.category.split("::")[1]} onClick={() => showWeapon(i)}>
                
            <h2>{i.displayName} ({i.category.split("::")[1]})</h2>
            <img src={i.displayIcon} alt="Agent" style={{ maxWidth:'100%', height:'auto'}}/>

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