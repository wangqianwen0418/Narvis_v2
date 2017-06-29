import * as React from "react";
import * as ReactDOM from "react-dom";
import { Col, Row, Grid } from 'react-bootstrap';

import { Title } from "./components/Title";
import View from "./components/View";

const Main = () => 
<div>
<Title title='NarVis'/>
<Grid>
    <Row>
        <Col lg={4}>
            <View heading='AA' body='' height={45}/>
            <View heading='AA' body='' height={45}/>
        </Col>
        <Col lg={8}>
            <View heading='AA' body='' height={70} />
            <View heading='AA' body='' height={20} />
        </Col>
    </Row>    
</Grid>
</div>

ReactDOM.render(
    <Main />,
    document.getElementById("example")
);