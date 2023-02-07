
function Nav() {
    return (
        <header>
            <nav>
                <ul>
                    <li><img src={require("../icons_assets/logoy.png")} alt="Logo" width={100}/></li>
                    <li><a href="/"> Home </a></li>
                    <li><a href="/#about"> About </a></li>
                    <li><a href="/#menu"> Menu </a></li>
                    <li><a href="/Booking"> Reserve </a></li>
                    <li><a href="/#menu"> Order </a></li>
                    <li><a href="/"> Login </a></li>
                </ul>
            </nav>
        </header>

    );
}

export default Nav;