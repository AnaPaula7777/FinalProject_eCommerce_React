import React from 'react'
import Particles from 'react-particles-js';
import particlesConfig from '../config/particlesConfig';
import './Home.css'

export default function Home() {
    return(
        <div>
            <div style={{ position: 'relative', background: 'black' }}>
               
                <h1 id="centered">WELCOME</h1>
                <p id="centered1" >There are a million ways to surf, and as long as you're smiling, you're doing it right.</p>
                
                <Particles height="100vh" width="100vw" params={particlesConfig} />
            </div>
        </div>
    )

}