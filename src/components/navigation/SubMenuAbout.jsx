import './SubMenu.css';

export default function About({ subMenuAnimation }) {

    return (
        <div className="infoBar"

            style={{
                transition: '500ms',
                transform: `translate(0px, ${subMenuAnimation}px)`
            }}
        >
            <p>We are /company name/, we work connecting peoples to opportunities,
                from /start/ to /today/ working to offer you the best service possible
            </p>

        </div>

    )
}

