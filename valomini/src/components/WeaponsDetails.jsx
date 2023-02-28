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


    
    function changeImage(e){
      let chromaIndex = e.target.getAttribute("value2") 
      let weaponIndex = e.target.getAttribute("value")
      let newChroma = document.querySelector("#weapon"+weaponIndex)
      newChroma.src= slct.skins[weaponIndex].chromas[chromaIndex].fullRender
    }

    function openVideo(e){
      let videosrc = e.target.getAttribute("videosrc") 
      let video = document.querySelector("#video")
      let source = document.querySelector("#source")
      source.src=videosrc
      console.log(videosrc)
      video.load()
      video.addEventListener("canplaythrough", function() {
        video.play()
      })
      window.scrollTo(0, document.body.scrollHeight) 
    }                                               
    window.onscroll = function() {
      const video = document.querySelector('#video')
      if(video){ // added this condition because of Cannot read properties of null (reading 'pause')
        video.pause()
      }
    }
        //console.log(slct)
        if(slct){
  return (
    <div>
        <div className="agents-grid">
        
        {slct.skins.map((i, index) =>
        (i.displayName.toLowerCase().includes(info.search.toLowerCase())) || (i.displayName && info.search === '') ?
                <div>
            <div>{i.displayName}</div>
            {i.levels.map((level, index3) =>
            (i.levels.length > 1) ?
            <>
              <button videosrc={level.streamedVideo} value3={index3} onClick={openVideo}>Level{index3 + 1} </button>
              
            </>:null
            )}
            <img id={"weapon"+index} src={i.chromas[0].fullRender} alt="Icon" style={{ maxWidth:"100%", height:'auto'}}/>
            
            {i.chromas.map((chroma , index2) =>
            (i.chromas.length > 1) ?
            <>
              <img src={chroma.swatch} value2={index2} value={index} onClick={changeImage} alt="Swatch" style={{ maxWidth:"10%", heigth:'auto'}}></img>
              
            </>: null
            )}
            </div>:null
      )}

        </div>
        <a href="#top">Back to top of page</a>
        <div>
        <video id="video" width="80%" height='auto' controls>
  <source id="source" src="" type="video/mp4"/>
        </video>
        </div>
    </div>
  ) }
  else return (<h1>Loading</h1>)
}
