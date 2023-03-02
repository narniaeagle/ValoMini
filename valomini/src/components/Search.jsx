import { useContext } from 'react'
import { Data } from "../Data"


export default function Search () {

    const { info, setInfo } = useContext(Data)
    

    function handleInput(e){
        e.preventDefault()
        
        setInfo({...info, search: e.target.value})
    }  
   
    return (
        <div>
            <form className='searchbar' onSubmit={(e)=>e.preventDefault()}> 
            <input id="search" type="text" value={info.search} onChange={handleInput}></input>
            </form>
        </div>
    )
}