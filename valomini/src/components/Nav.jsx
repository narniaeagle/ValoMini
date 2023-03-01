import { Link } from 'react-router-dom'
import { Data } from "../Data";
import { useContext } from 'react'
import Search from './Search'

export default function Nav () {

    const { info, setInfo } = useContext(Data)
    function clearSearch(){
        setInfo({...info, search: ''})
        setInfo({...info, search2: ''})
        document.querySelector('#search').value = ''; // for clearing input's input value
    }

    return (
        <div>
            <div className='navbuttons'>
            <Link to='/' className='navbutton' onClick={clearSearch}>Home</Link>
            <Link to='/agents' className='navbutton' onClick={clearSearch}>Agents</Link>
            <Link to='/weapons' className='navbutton' onClick={clearSearch}>Weapons</Link>
            </div>
            <Search />
        </div>
    )
}