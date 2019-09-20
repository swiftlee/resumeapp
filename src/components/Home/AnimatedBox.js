import React, {Component} from 'react';
import "../../styles/Home.scss";
import anime from 'animejs';

const MediaIcons = (props) => {
    return (
        <ul className={"social-media-list"}>
            <li><a className={"contact-icon"}>
                <i className="fa fa-github" aria-hidden="true"/>
            </a></li>
            <li><a className={"contact-icon"}>
                <i className="fa fa-linkedin" aria-hidden="true"/>
            </a></li>
        </ul>
    );
};

class AnimatedBox extends Component {

    componentDidMount() {
        anime({
            targets: 'rect',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1000,
            delay: function (el, i) {
                return i * 250
            },
            direction: 'alternate',
            loop: false
        });
    }

    render() {
        return (
            <div className={"text-center"}>
                <svg width="400" height="400" preserveAspectRatio="xMidYMid meet" viewBox="0 0 400 400"
                     className={"name-box-wrapper"}>
                    <rect className={"name-box"} width="400" height="400"/>
                </svg>
                <MediaIcons/>
            </div>
        );
    }
}

export default AnimatedBox;