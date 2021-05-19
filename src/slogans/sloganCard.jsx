import React from 'react';
import { Card } from 'react-bootstrap';
import "./style.css";
import Bounce from 'react-reveal/Bounce';
import HeadShake from 'react-reveal/HeadShake';
const CardS = (props) => {
    return (
        <Bounce {...props.ani} duration={1000} >
            <Card style={{ width: '19rem', backgroundColor: "lightblue" }} className="flt">
            <Card.Body> 
                    <HeadShake  duration={3000}>
                <Card.Text>
                     
                    {props.text}
                   
                </Card.Text>
                </HeadShake>
            </Card.Body>
        </Card>
        </Bounce>
    );
};

export default CardS;