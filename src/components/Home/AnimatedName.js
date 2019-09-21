import React, {useEffect, useState} from 'react';
import "../../styles/Home.scss";
import anime from 'animejs';
import ArrowRight from 'mdi-react/ArrowRightIcon';
import ArrowDown from 'mdi-react/ArrowDownIcon';

function useHover() {
    const [hoverState, setHoverState] = useState(false);
    const binder = {
        onMouseEnter: () => setHoverState(true),
        onMouseLeave: () => setHoverState(false)
    };
    return [hoverState, binder];
}

function AnimatedName() {
    useEffect(() => {
        async function animateName() {
            await anime({
                targets: '#my-name',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 1200,
                delay: function (el, i) {
                    return i * 75
                },
                direction: 'alternate',
                loop: false
            }).finished;
        }
        animateName();
    });

    const [hoverState, bindHover] = useHover();

    console.log(hoverState);

    return (
        <div>
            <section id={"home"} className={"flex height-fix"}>
                <div className="intro-text">
                    Hey there, I'm <span id="my-name" style={{'color': 'var(--primary-color)'}}>Jonathan Conlin</span>.
                    <br/>
                    I'm a software developer.
                </div>
                <div className="button" {...bindHover}>
                    See my portfolio {hoverState ? <ArrowRight className={"rotate-arrow"}/> : <ArrowRight className={"arrow"}/>}
                </div>
            </section>
        </div>
    );
}

export default AnimatedName;