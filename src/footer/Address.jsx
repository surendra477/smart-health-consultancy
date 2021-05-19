import React from 'react';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import "./style.css"
const Address = () => {
    return (
        <div className="address">
            <LocalHospitalIcon style={{ fontSize:50}}/> &nbsp; 
            Room no. 86, Ganesh nagar, S.P. Road, Wadala (E),  Mumbai 400037, Maharashtra
        </div>
    );
};

export default Address;