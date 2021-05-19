import React from 'react';
import { Card} from 'react-bootstrap';
import logo from "../imgs/logo.gif"
import "./style.css"
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
const Vml = () => {
    return (
        <div className="bgbig">
        <div className="container cardsize">
                <Fade left duration={3000}>
            <Card style={{ width: '18rem' }} className="fltlft">
                <Card.Body>
                    <Card.Title>vision</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text>
                    We will transform the health care experience through a culture of caring, quality, safety, service, innovation and excellence, and be recognized by patients and families, volunteers and the community as:

The best place to practice medicine, and
The best place to receive care

    </Card.Text>
                   
                </Card.Body>
            </Card>
                    </Fade>
                 <Flip top>
            <Card style={{ width: '18rem' }} className="fltlft">
                <Card.Body>
                   
                    <img src={logo} className="logo"/>
                   
                </Card.Body>
            </Card>
                </Flip>
                <Fade right duration={3000}>
            <Card style={{ width: '18rem' }} className="fltlft">
                <Card.Body>
                    <Card.Title>Mission</Card.Title>
                   
                    <Card.Text>
                        To ensure accessible and affordable quality healthcare by compassionate medical professionals to all.
                        To be the centre of excellence for medical research and academics.
                        To cultivate an environment of trust, honesty, mutual respect, equality, and ethics.
    </Card.Text>
                   
                </Card.Body>
            </Card>
                    </Fade>
        </div>
        </div>
    );
};

export default Vml;