import { Link } from 'react-router-dom'
import { Data } from "../Data";
import { useContext } from 'react'


export default function Nav () {

    const { info, setInfo } = useContext(Data)
    function clearSearch(){
        setInfo({...info, search: '', search2: ''});
        if(document.querySelector('#search')){
            document.querySelector('#search').value = '';
        }
    }

    return (
        <div>
            <div className='navbuttons'>
            <Link to='/' className='navbutton' onClick={clearSearch}>Home</Link>
            <Link to='/agents' className='navbutton' onClick={clearSearch}>Agents</Link>
            <Link to='/weapons' className='navbutton' onClick={clearSearch}>Weapons</Link>
            </div>

        </div>
    )
}