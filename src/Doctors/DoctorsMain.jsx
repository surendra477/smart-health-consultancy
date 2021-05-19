import React, { useState} from 'react';
import Doctorsid from "./Doctors_id";
import Doctorsdesign from "./Doctors_design";
import {  FormControl, Form } from "react-bootstrap";
import "./style.css"
import Footer from '../footer/Footer';
const DoctorsMain = (Doctorsid) => {
    
    return (
        <Doctorsdesign
            tittle={Doctorsid.title}
            name = {Doctorsid.name}
            address = {Doctorsid.address}
            phone={Doctorsid.phone}
            mail={Doctorsid.mail}
        />
    );
};

const DoctorsDone = () => {

         const [state, setState] = useState("")

    const filterData = Doctorsid.filter(ProductItem => {
        return ProductItem.title.toLowerCase().includes(state.toLowerCase())
    })

    return(
        <div className="top">
        <div className="position">
                    <FormControl id='format' type="text" placeholder="Search" className="mr-sm-2" onChange={e => setState(e.target.value)} />
                   
                </div>
            <Form inline >
                
                <div>
                    <div className="show" >
                        {filterData.map(DoctorsMain)}
                    </div>
                </div>
            </Form>
            <Footer />
        </div>
    )
}


export default DoctorsDone;