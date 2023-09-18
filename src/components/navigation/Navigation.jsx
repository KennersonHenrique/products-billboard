import './Header.css';

export default function Navigation({ clickHandler }) {

    return (
        
        <nav className="navbar">
                <div className="logo">Company Products and Services</div>
                <ul className="nav-links">
                    <div className="menu">
                        <button id="aboutButton" onClick={() => clickHandler('About')}>About</button>
                        <button id="contactUsButton" onClick={() => clickHandler('ContactUs')}>Contact us</button>
                    </div>
                </ul>
            </nav>
    )
}

