import Nav from './Nav'

export default function Header () {
    return (
        <div>
            <div className="header-title">
                <h1><span id='title1'>Valo</span><span id='title2'>Mini</span></h1>
            </div>
            <div>
                <Nav />
            </div>
        </div>
    )
}