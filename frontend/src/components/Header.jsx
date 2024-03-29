import React from 'react'
import { ReactNavbar } from 'overlay-navbar'
import { FaUserAlt } from 'react-icons/fa'

const Header = () => {
    return (
        <ReactNavbar
            navColor1="white"
            navColor2="hsl(219,48%,8%)"
            burgerColor="hsl(250,100%,75%)"
            burgerColorHover="hsl(250,100%,75%)"
            nav2justifyContent="space-around"
            nav3justifyContent="space-around"
            link1Text="Home"
            link2Text="About"
            link3Text="Contact"
            link4Text="Admin"
            link1Url="/"
            link2Url="/about"
            link3Url="/contact"
            link4Url="/account"
            link1Color="HSL(250,100%,75%)"
            link1ColorHover="white"
            link1Size="1.5rem"
            link1Padding="3vmax"
            profileIcon={false}
            ProfileIconElement={FaUserAlt}
        />
    )
}

export default Header