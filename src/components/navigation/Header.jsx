import './Header.css';
import React, { useState } from 'react';
import ContactUs from './SubMenuContactUs';
import About from './SubMenuAbout';
import Navigation from './Navigation';

export default function Header() {

    const originalPosition = -100;
    const newPosition = 0;

    const [aboutVisibility, setAboutVisibility] = useState(originalPosition);
    const [contactUsVisibility, setContactUsVisibility] = useState(originalPosition);

    function subMenuMangement(subMenu) {
        
        switch (subMenu) {
            case 'About':
                if (aboutVisibility === originalPosition) {
                    setAboutVisibility(newPosition)
                    setContactUsVisibility(originalPosition)
                } else {
                    setAboutVisibility(originalPosition)
                }
                break;
            case 'ContactUs':
                if (contactUsVisibility === originalPosition) {
                    setAboutVisibility(originalPosition)
                    setContactUsVisibility(newPosition)
                } else {
                    setContactUsVisibility(originalPosition)
                }
                break;
            default:
                setAboutVisibility(originalPosition)
                setContactUsVisibility(originalPosition)

        }
    }

    window.addEventListener('mouseup', (e) => {
        if (e.target !== document.getElementById('contactUsButton')) {
            setContactUsVisibility(originalPosition)
        }
        if (e.target !== document.getElementById('aboutButton')) {
            setAboutVisibility(originalPosition)
        }

    })

    return (
        <>
            <Navigation clickHandler = { subMenuMangement }/>
           
            <About subMenuAnimation={aboutVisibility} />
            <ContactUs subMenuAnimation={contactUsVisibility} />
        </>
    )
}