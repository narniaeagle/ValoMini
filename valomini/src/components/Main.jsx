import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Data from './Data'

export default function Main () {
    return (
        <div className='main'>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/data' element={<Data/>}/>
            </Routes>
        </div>
    )
}