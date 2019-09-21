import React, {Component} from 'react';
import Home from "./views/Home/Home";
import "./styles/Home.scss";

class App extends Component {
    render() {
        return (
            <div>
                <head>
                    <title>Resume App</title>
                    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                          rel="stylesheet"/>
                    <style media={'all'} data-href={'fonts/mdi/css/materialdesignicons.min.css'}
                           dangerouslySetInnerHTML={{
                               __html: `
                    @font-face{font-family:"Material Design Icons";src:url("http://findmatthew.com/fonts/mdi/css/../fonts/materialdesignicons-webfont.eot?v=1.5.54");src:url("http://findmatthew.com/fonts/mdi/css/../fonts/materialdesignicons-webfont.eot?#iefix&v=1.5.54") format("embedded-opentype"),url("http://findmatthew.com/fonts/mdi/css/../fonts/materialdesignicons-webfont.woff2?v=1.5.54") format("woff2"),url("http://findmatthew.com/fonts/mdi/css/../fonts/materialdesignicons-webfont.woff?v=1.5.54") format("woff"),url("http://findmatthew.com/fonts/mdi/css/../fonts/materialdesignicons-webfont.ttf?v=1.5.54") format("truetype"),url("http://findmatthew.com/fonts/mdi/css/../fonts/materialdesignicons-webfont.svg?v=1.5.54#materialdesigniconsregular") format("svg");font-weight:normal;font-style:normal}.mdi{display:inline-block;font:normal normal normal 24px/1 "Material Design Icons";font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0, 0)}.mdi-arrow-right:before{content:\F054}
                    `
                           }}>
                    </style>

                </head>
                <div className={"background"}>
                    <Home/>
                </div>
            </div>
        );
    }
}

export default App;
