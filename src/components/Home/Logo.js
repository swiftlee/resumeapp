import React, {useEffect} from 'react';
import ParticilizedLogo from '../../scripts/ParticilizedLogo';

function Logo() {

    useEffect(() => {
        new ParticilizedLogo();
    }, []);

    return (
        <body>
        <div className={"logo-container"}/>
        </body>
    );
}

export default Logo;
