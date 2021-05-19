import React from 'react';
import {
    Timeline,
    Events,
    UrlButton,
    ImageEvent,
    TextEvent,
    YouTubeEvent,
} from '@merc/react-timeline';
import image1 from "./images/1.jpg"
import image2 from "./images/2.jpg"
import image3 from "./images/3.jpg"
import image4 from "./images/4.jpg"
const Mains = () => {
    return (
        <div>
            <Timeline>
                <Events>
                   

                    <ImageEvent
                        date="covid measures"
                        
                        src={image1}
                        
                        alt="jellyfish swimming"
                       
                    >
                       
                    </ImageEvent>

                    <ImageEvent
                        date="physical distancing"
                       
                        src={image2}

                        alt="jellyfish swimming"
                        
                    >
                     
                    </ImageEvent>

                    <ImageEvent
                       
                        date="physical isolation"
                        src={image3}
                        alt="jellyfish swimming"
                       
                    >
                       
                    </ImageEvent>

 <ImageEvent
                        date="physical quarantine"
                    
                        src={image4}
                        alt="jellyfish swimming"
                       
                       >
                    </ImageEvent>
                 
                </Events>
            </Timeline>
        </div>
    );
};

export default Mains;
   
