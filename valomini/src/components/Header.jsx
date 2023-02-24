import Nav from './Nav'

export default function Header () {
    return (
        <div>
            <div className="header-title">
                <h1>ValoMini</h1>
            </div>
            <div className="nav-container">
                <Nav />
            </div>
        </div>
    )
}