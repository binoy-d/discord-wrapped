function Navbar() {
    return (
        <div className="navbar navbar-expand-lg dw-navbar">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapseContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-row-reverse" id="navbarCollapseContent">
                <ul className="navbar-nav">
                    <li className="nav-item center-nav-item">
                        <a href="/team" className="nav-button">Who made this?</a>
                    </li>
                    <li className="nav-item center-nav-item">
                        <a href="/support" className="nav-button">Support</a>
                    </li>
                    <li className="nav-item">
                        <a href="/add" className="nav-add-button">Add to Discord</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
