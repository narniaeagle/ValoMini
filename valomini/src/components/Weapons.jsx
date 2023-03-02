import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Data } from "../Data";
import { useNavigate } from "react-router-dom"
import Search from "./Search"

export default function Weapons () {
 

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
        setInfo({...info, search: ''})
        navigate(`${i.uuid}`)
      }


      let lastCategory = []
      function categories(i, index){
            if (lastCategory.indexOf(i.category.split("::")[1]) === -1) { // indexOf returns -1 if the category name is not in the array
                lastCategory.push(i.category.split("::")[1])
            return(
                <button key={index} className="weapon-category"value={i.category.split("::")[1]} onClick={showCategories}>{i.category.split("::")[1]}</button>
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
            <Search/>
            {weapon.data.map((i, index) => categories(i, index) 
            )}

            <div className="grid">
            {weapon.data.map((i, index) =>
            ( i.displayName.toLowerCase().includes(info.search.toLowerCase()) && (i.category.split("::")[1].includes(info.search2) && info.search2 !== '')) || // search2 buttons pressed inside search
             ( i.displayName.toLowerCase().includes(info.search.toLowerCase()) && info.search2 === '') || // search2 is disabled all search
              (i.category.split("::")[1].toLowerCase() === info.search.toLowerCase()) || // search by tags
               (info.search === '' && info.search2 === '')  ? // show all if search (searchbar) and search2 (buttons) are empty
            <div key ={i.uuid} className="space-between"onClick={() => showWeapon(i)}>
                
            <h2 key={i.displayName} className="weapon-name">{i.displayName} ({i.category.split("::")[1]})</h2>
            <img key={"weaponimg-"+index} src={i.displayIcon} alt="Weapon" style={{ maxWidth:'100%', height:'auto'}}/>

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