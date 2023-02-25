import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Agents from './Agents'
import AgentsDetails from './AgentsDetails'
import Weapons from './Weapons'
import WeaponsDetails from './WeaponsDetails'

export default function Main () {
    return (
        <div className='main'>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/agents' element={<Agents/>}/>
                <Route path= '/agents/:agents_id' element={<AgentsDetails/>}/>
                <Route path='/weapons' element={<Weapons/>}/>
                <Route path='/weapons/:weapons_id' element={<WeaponsDetails/>}/>
            </Routes>
        </div>
    )
}