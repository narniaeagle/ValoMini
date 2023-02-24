import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Agents from './Agents'

export default function Main () {
    return (
        <div className='main'>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/agents' element={<Agents/>}/>
            </Routes>
        </div>
    )
}