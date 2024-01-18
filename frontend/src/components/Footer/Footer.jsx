import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin  } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <Typography variant="h5">About Me</Typography>
                <Typography>
                    Hey👋!, My name is Harsh Verma. I am a Frontend End Developer.
                </Typography>

                <Link to="/contact" className="footerContactBtn">
                    <Typography>Contact Me</Typography>
                </Link>
            </div>
            <div>
                <Typography variant="h6">Social Media</Typography>
                <a href="https://github.com/hv0911" target="black">
                    <BsGithub />
                </a>
                <a href="https://www.linkedin.com/in/meabhisingh/" target="black">
                    <BsLinkedin />
                </a>
                <a href="https://youtube.com/6packprogrammer/" target="black">
                    <SiLeetcode />
                </a>
                <a href="https://instagram.com/meabhisingh/" target="black">
                    <BsInstagram />
                </a>

            </div>
        </div>
    );
};

export default Footer;