import React, {useEffect, useState} from 'react';
import "../../styles/Home.scss";
import anime from 'animejs';
import ArrowRight from 'mdi-react/ArrowRightIcon';

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
        // Wrap every letter in a span
        const textWrapper = document.querySelector('.intro-text .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w|\.)/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
            .add({
                targets: '.intro-text .line',
                scaleY: [0, 1],
                opacity: [0.5, 1],
                easing: "easeOutExpo",
                duration: 700
            })
            .add({
                targets: '.intro-text .line',
                translateX: [0, document.querySelector('.intro-text .letters').getBoundingClientRect().width + 15],
                easing: "easeOutExpo",
                duration: 700,
                delay: 100
            }).add({
            targets: '.letter',
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=775',
            delay: (el, i) => 34 * (i + 1)
        }).add({
            targets: '.period',
            opacity: [0, 1],
            easing: "easeOutExpo",
        }).add({
            targets: '.line',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: -300
        });
    }, []);

    const [hoverState, bindHover] = useHover();

    console.log(hoverState);

    return (
        <div>
            <section id={"home"} className={"flex height-fix"}>
                <div className="intro-text">
                    Hey there, I'm <span className="line line1"/>
                    <span className={'letters'} style={{'color': 'var(--primary-color)'}}>Jonathan Conlin</span><span className={"period"}>.</span>
                    <br/>
                    I'm a software developer.
                </div>
                <div className="button" {...bindHover}>
                    See my portfolio {hoverState ? <ArrowRight className={"rotate-arrow"}/> :
                    <ArrowRight className={"arrow"}/>}
                </div>
                <br/>This is app is still in progress, thank you for visiting.
            </section>
        </div>
    );
}

export default AnimatedName;