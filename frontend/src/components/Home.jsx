import React, { useEffect } from 'react'
import { ReactNavbar } from 'overlay-navbar'
import { FaUserAlt } from 'react-icons/fa'
import * as THREE from 'three'

const Home = () => {

    useEffect(() => {

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const canvas = document.querySelector('.homecanvas');
        const renderer = new THREE.WebGLRenderList({ canvas: canvas });

        const moonGoemetry = new THREE.SphereGeometry(3, 32, 32)

        renderer.setSize(window.innerWidth, window.innerHeight);

        renderer.render(scene, camera);

    }, [])

    return (
        <div className="home">
            <canvas className='homeCanvas'></canvas>
        </div>
    )
}

export default Home;