import React, {Component} from 'react';
import "../../styles/Home.scss";
import anime from 'animejs';

class AnimatedProfession extends Component {



    componentDidMount() {

        const textWrapper = document.querySelector('.ml1 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
            .add({
                targets: '.ml1 .letter',
                scale: [0.3,1],
                opacity: [0,1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 600,
                delay: (el, i) => 70 * (i+1)
            }).add({
            targets: '.ml1 .line',
            scaleX: [0,1],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 700,
            offset: '-=875',
            delay: (el, i, l) => 80 * (l - i)
        });
    }

    render() {
        return (
            <div>
                <p className="ml1">
                    <span className="text-wrapper">
                         <span className="line line1"/>
                         <span className="letters">Software Developer</span>
                         <span className="line line2"/>
                     </span>
                </p>
            </div>
        );
    }
}

export default AnimatedProfession;