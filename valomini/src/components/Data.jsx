import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Data () {
 
    //making a state to set data in √
    //setting up a useeffect to control my components lifecycle √
    //organize API links / url √
    // make the darned API call, right?√
    //set our data in state and log it√
    // render our data √
    //set up Guard Operator √

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

    //Returns go INSIDE of our IF ELSE
    // Ternaries go INSIDE of our Returns


    if(agent.data){
    return (  
        <div>
            {agent.data.map((info) =>
            <div>
            <h2>{info.displayName}</h2>
            <img src={info.fullPortrait} style={{width:"24rem",height:"24rem"}}/>
  
            </div>
            )}
        </div>
    )}
    else{
        return(
            <h1>Loading</h1>
        )
    }
  }