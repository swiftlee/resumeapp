import React, {Component} from 'react';
import AnimatedName from '../../components/Home/AnimatedName';
import AnimatedProfession from '../../components/Home/AnimatedProfession';
import AnimatedBox from "../../components/Home/AnimatedBox";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends Component {
    render() {
        return (
            <div>
                <head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"/>
                    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
                    <link rel="stylesheet"
                          href="https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css"
                          integrity="sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=" crossOrigin="anonymous"/>
                    <title>Jon Conlin's Portfolio Home</title>
                </head>
                <Container className={"container"}>
                    <Row className={"show-grid"} float={"center"}>
                        <Col xs={12} xsOffset={6}>
                            <AnimatedBox/>
                        </Col>
                        <Col xs={12} xsOffset={6}>
                            <AnimatedName/>
                        </Col>
                        <Col xs={12} xsOffset={6}>
                            <AnimatedProfession/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;
