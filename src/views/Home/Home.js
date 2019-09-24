import React from 'react';
import AnimatedName from '../../components/Home/AnimatedName';
import Particles from 'react-particles-js';
import particleOpts from '../../resources/particles.json';
import Logo from "../../components/Home/Logo";

function Home() {

    return (
        <div>
            <div id={"particles"}>
                <Particles params={particleOpts}/>
            </div>
            <Logo/>
            <AnimatedName/>
        </div>
    )
}

export default Home;
