import React from 'react';
import { Card,CardDeck,  CardGroup } from 'react-bootstrap';
import img1 from "./imgs/imag1.JPG"
import img2 from "./imgs/imag2.JPG"
import img3 from "./imgs/imag3.JPG"
import Fade from 'react-reveal/Fade';
import "./style.css"
const Cardmain = () => {
    return (
        <div className="top">
        <div className="container tops">
        <CardDeck className="container hig">
                   
            <Card className="trs">
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                    <Card.Title>HOLISTIC NUTRITION</Card.Title>
                    <Card.Text>
                        Top Ten Best and Worst Foods for MS Multiple Sclerosis
              </Card.Text>
                </Card.Body>
                    <Card.Footer className="fotr">
                        <Card.Link href="https://www.afpafitness.com/blog/top-ten-best-and-worst-foods-for-ms-multiple-sclerosis">Read More -&gt;</Card.Link>

                    </Card.Footer>
            </Card>
                      
                   
            <Card className="mrg trs">
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                    <Card.Title>HOLISTIC NUTRITION</Card.Title>
                    <Card.Text>
                        Supplements to Support Clients with Multiple Sclerosis{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="fotr">
                        <Card.Link href="https://www.afpafitness.com/blog/7-controversial-weight-loss-strategies-and-what-to-do-instead">Read More  -&gt;</Card.Link>
                    
                </Card.Footer>
            </Card>
            <Card className="trs">
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                    <Card.Title>HOLISTIC NUTRITION</Card.Title>
                    <Card.Text>
                        Supplements to Support Clients with Multiple Sclerosis  
      </Card.Text>
                </Card.Body>
                    <Card.Footer className="fotr">
                        <Card.Link href="https://www.afpafitness.com/blog/supplements-to-support-clients-with-multiple-sclerosis">Read More -&gt;</Card.Link>

                    </Card.Footer>
            </Card>
            </CardDeck>
        </div> 
        </div>
    );
};

export default Cardmain;