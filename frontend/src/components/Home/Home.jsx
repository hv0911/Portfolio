import React, { useEffect, useState } from "react";
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../assets/moon.jpg";
import venusImage from "../../assets/venus.jpg";
import spaceImage from "../../assets/space.jpg";
import Timelines from "../Timeline/Timelines";
import { Box, CircularProgress, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MouseOutlined } from '@mui/icons-material'
import About from "../About/About";
import Experience from "../Experience/Experience";
import {
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiReactivex,
    SiNgrx,
    SiTypescript,
    SiAngular,
    SiBootstrap,
    SiRedux,
    SiJquery,
    SiTailwindcss

} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import ReactIcon from '../../assets/react.svg'
import ProjectCard from "../ProjectCard/ProjectCard";
import Footer from "../Footer/Footer";

const Home = ({ timelines, youtubes, skills }) => {

    const [projects, setProjects] = useState([1, 2, 3])
    const [loading, setLoading] = useState(true);
    const [fragment, setFragment] = useState(window.location.hash.slice(1));

    useEffect(() => {
        const handleHashChange = () => {
            const newFragment = window.location.hash.slice(1);
            setFragment(newFragment);

            // Check if the fragment is equal to "project"
            if (newFragment === 'projects') {
                // Get the DOM element of the project section (replace 'project-section' with the actual ID)
                const projectSection = document.getElementById('projects');

                // Scroll to the project section
                if (projectSection) {
                    projectSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [fragment]);

    useEffect(() => {
        const textureLoader = new THREE.TextureLoader();

        const moonTexture = textureLoader.load(moonImage);
        const venusTexture = textureLoader.load(venusImage);
        const spaceTexture = textureLoader.load(spaceImage);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.set(4, 4, 8);

        const canvas = document.querySelector(".homeCanvas");
        const renderer = new THREE.WebGLRenderer({ canvas });

        const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
        const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);

        const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
        const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
        const venus = new THREE.Mesh(venusGeometry, venusMaterial);
        venus.position.set(8, 5, 5);

        const pointLight = new THREE.PointLight(0xffcc00, 1);
        const pointLight2 = new THREE.PointLight(0xffcc00, 0.1);

        pointLight.position.set(8, 5, 5);
        pointLight2.position.set(-8, -5, -5);

        const ambientLight = new THREE.AmbientLight(0x404040); // Adjust color as needed
        scene.add(ambientLight);

        scene.add(moon);
        scene.add(venus);
        scene.add(pointLight);
        scene.add(pointLight2);
        scene.background = spaceTexture;

        const constSpeed = 0.01;
        window.addEventListener("mousemove", (e) => {
            if (e.clientX <= window.innerWidth / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;
            }

            if (e.clientX > window.innerWidth / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;
            }

            if (e.clientY > window.innerHeight / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;
            }

            if (e.clientY <= window.innerHeight / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;
            }
        });

        const animate = () => {
            requestAnimationFrame(animate);
            moon.rotation.y += 0.001;
            venus.rotation.y += 0.001;
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);
        };

        animate();

        setLoading(false);

        return window.addEventListener("scroll", () => {
            camera.rotation.z = window.scrollY * 0.001;
            camera.rotation.y = window.scrollY * 0.003;

            // const skillsBox = document.getElementById("homeskillsBox");

            // if (window.scrollY > 1500) {
            //     skillsBox.style.animationName = "homeskillsBoxAnimationOn";
            // } else {
            //     skillsBox.style.animationName = "homeskillsBoxAnimationOff";
            // }
        });
    }, []);



    const scrollToProjects = () => {
        const urlFragment = window.location.hash.slice(1); // Remove the leading #
        if (urlFragment == 'projects') {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="home">

            {
                loading &&
                <Box sx={{ display: 'flex', position: 'absolute', top: "50%", left: "50%" }}>
                    <CircularProgress />
                </Box>

            }



            <canvas className="homeCanvas"></canvas>

            <div className="homeCanvasContainer">

                {/* <div className="menu">
                    <Link to='/about'>About Me</Link>
                    <Link to='/contact'>Contact Me</Link>
                </div> */}

                <Typography variant="h3">
                    <p>H</p>
                    <p>A</p>
                    <p>R</p>
                    <p>S</p>
                    <p>H</p>
                    <p>&nbsp;</p>
                    <p>V</p>
                    <p>E</p>
                    <p>R</p>
                    <p>M</p>
                    <p>A</p>
                </Typography>

                <div className="homeCanvasBox">
                    <Typography variant="h3">Software</Typography>
                    <Typography variant="h3">Engineer</Typography>
                    <Typography variant="h3">Full Stack</Typography>
                    <Typography variant="h3">Developer </Typography>
                </div>

                {/* <Link to='#'>View Work </Link> */}
                <a href="#projects" onClick={scrollToProjects}>View Work</a>

                <div className="homeScrollBtn">
                    <MouseOutlined /> here
                </div>

            </div>

            <div className="homeContainer">
                <Typography variant="h3">TIMELINE</Typography>
                <Experience />
            </div>

            <div className="homeSkills">
                <Typography variant="h3">Skills</Typography>
                <div className="skillContainer">
                    <div className="skillBox">
                        <SiJavascript />
                        <Typography variant="h5">JavaScript</Typography>
                        <input type="range" name="" id="" value={80} />
                    </div>
                    <div className="skillBox">
                        <SiReact />
                        <Typography variant="h5">React.js</Typography>
                        <input type="range" name="" id="" value={70} />
                    </div>
                    <div className="skillBox">
                        <SiRedux />
                        <Typography variant="h5">Redux</Typography>
                        <input type="range" name="" id="" value={60} />
                    </div>
                    <div className="skillBox">
                        <SiAngular />
                        <Typography variant="h5">Angular</Typography>
                        <input type="range" name="" id="" value={80} />
                    </div>
                    <div className="skillBox">
                        <SiTypescript />
                        {/* <img src={ReactIcon} alt="" style={{ fill: "white" }} /> */}
                        <Typography variant="h5">Typescript</Typography>
                        <input type="range" name="" id="" value={70} />
                    </div>
                    <div className="skillBox">
                        <SiNgrx />
                        <Typography variant="h5">Ngrx</Typography>
                        <input type="range" name="" id="" value={60} />
                    </div>
                    <div className="skillBox">
                        <SiReactivex />
                        <Typography variant="h5">Rxjs</Typography>
                        <input type="range" name="" id="" value={50} />
                    </div>
                    <div className="skillBox">
                        <SiBootstrap />
                        <Typography variant="h5">Bootstrap</Typography>
                        <input type="range" name="" id="" value={80} />
                    </div>
                    <div className="skillBox">
                        <SiHtml5 />
                        <Typography variant="h5">HTML/CSS</Typography>
                        <input type="range" name="" id="" value={85} />
                    </div>

                    <div className="skillBox">
                        <SiTailwindcss />
                        <Typography variant="h5">Tailwind</Typography>
                        <input type="range" name="" id="" value={85} />
                    </div>

                    <div className="skillBox">
                        <SiNodedotjs />
                        <Typography variant="h5">Node.js</Typography>
                        <input type="range" name="" id="" value={60} />
                    </div>
                    <div className="skillBox">
                        <SiExpress />
                        <Typography variant="h5">Express.js</Typography>
                        <input type="range" name="" id="" value={50} />
                    </div>

                    <div className="skillBox">
                        <FaJava />
                        <Typography variant="h5">Java</Typography>
                        <input type="range" name="" id="" value={40} />
                    </div>
                    <div className="skillBox">
                        <SiJquery />
                        <Typography variant="h5">jQuery</Typography>
                        <input type="range" name="" id="" value={50} />
                    </div>
                </div>

            </div>

            {/* <Footer /> */}

            {/* <footer>
                Here is the footer
            </footer> */}

            <div id="projects" className="projects">
                <Typography variant="h3" style={{ textAlign: 'center' }}>Projects</Typography>
                <div className="projectsWrapper">
                    {
                        projects.map((project) => (
                            <ProjectCard
                                url="https://github.com/hv0911/Portfolio"
                                projectImage={moonImage}
                                projectTitle="Portfolio"
                                description="GeeksforGeeks is organizing one of the biggest events called THE GEEKS SUMMER CARNIVAL, in which you can experience fun, excitement, entertainment, and games. Also, get loads of discounts, goodies & various other cool stuff. throughout the carnival days. Event dates for which are 26 March to 2 April 2022.  …"
                                technologies="Nodejs Express MongoDB"
                            /* pass any necessary props to ProjectCard */ />
                        ))
                    }
                </div>
            </div>
        </div >
    );
};

export default Home;