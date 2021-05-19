import React from 'react';
import { Card,Button } from "react-bootstrap";
import hospital from "./img/hospital.jpg"
import "./style.css"
const Doctorsdesign = (props) => {
    return (
        <div className="flt">
            <Card style={{ width: '20rem' , height:'33rem' }}>
                <Card.Img variant="top" src={hospital} />
                <Card.Body>
                    <Card.Title>{props.tittle}</Card.Title>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.address} 
                       
                    </Card.Text>
                    <Card.Text>
                       Phone No: {props.phone}

                    </Card.Text>
                    <Card.Text>
                        Email :{props.mail} 

                    </Card.Text>
                    
                     {/* <Button style={{marginBottom: "0px"}} variant="primary">Appointment</Button> */}
                   

                </Card.Body>

                <Card.Footer className="fotr">
                        <Card.Link href="/AppDoctor"> Appointment -&gt;</Card.Link>
                    
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Doctorsdesign;