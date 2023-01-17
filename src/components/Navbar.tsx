export function Navbar(){
    return(
        <>
        <div className="top" id="topNav">
            <header >
                <div className="logo">
                <a href="/">
                    <img src="./img/newLogo-red-noBG.png" alt="Logo" />
                </a>
                </div>
                <div className="name-author">
                    <h1>Hardi Mahendra</h1>
                </div>
            </header>
            <nav>
                <input type="checkbox" id="check"/>
                <label htmlFor="check">
                    <i id="open" className="bi bi-menu-button-wide-fill"></i>
                    <i id="close" className="bi bi-x-diamond-fill"></i>
                </label>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/experience">Experience</a></li>
                    <li><a href="/projects">Projects</a></li>
                    {/* <li><a href="/contacts">Contacts</a></li> */}
                </ul>
            </nav>
        </div>
        </>
    )
}