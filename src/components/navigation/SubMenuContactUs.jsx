import './SubMenu.css';

export default function ContactUs({ subMenuAnimation }) {

  return (
    <div
      className="infoBar"
      style={{
        transition: '500ms',
        transform: `translate(0px, ${subMenuAnimation}px)`
      }}
    >
      <li>Telephone: /number/</li>
      <li>E-mail: /email/</li>
      <li>Working Hours: /start/ to /end/</li>
    </div>
  )

}
