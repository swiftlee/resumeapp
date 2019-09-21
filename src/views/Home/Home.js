import React from 'react';
import AnimatedName from '../../components/Home/AnimatedName';
import Particles from 'react-particles-js';
import particleOpts from '../../resources/particles';

function Home() {

    return (
        <div>
            <div id={"particles"}>
                <Particles params={particleOpts}/>
            </div>
            <head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"/>
                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                      rel="stylesheet"/>
                <link rel="stylesheet"
                      href="https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css"
                      integrity="sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=" crossOrigin="anonymous"/>
                <title>Jon Conlin's Portfolio Home</title>
            </head>
            <AnimatedName/>
        </div>
    )
}

export default Home;
