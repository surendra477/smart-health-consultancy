import React from 'react';
import CardS from "./sloganCard"
import Slogans from "./slogans"
import "./style.css"
function Createcard(Slogans)  {
return(
    <CardS  
        id={Slogans.id}
        text={Slogans.text}
        ani ={Slogans.animation}
        inn={Slogans.innerAnimation}
    />)
}


const SlogansCard = () => {
    return (
        <div className= "bg" >
            {Slogans.map(Createcard)}
    </div>
    );
};

export default SlogansCard;