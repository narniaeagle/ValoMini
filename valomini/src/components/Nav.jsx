import Search from './Search'
import { Link } from 'react-router-dom'

export default function Nav () {


    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/agents'>Agents</Link>
            <Link to='/weapons'>Weapons</Link>
            <Search />
        </div>
    )
}