import React from 'react';
import { BrowserRouter ,Switch, Route } from "react-router-dom";
import DoctorsDone from "./Doctors/DoctorsMain";
import Main from "./Covid_info/main";
import  Home from "./Home.jsx";
import ContactUs from "./Doctor_db/Email"
const Routes = () => {
    return (
        <div>
             <BrowserRouter>
               <Switch>
               <Route exact component={DoctorsDone} path="/Find"/>
               <Route exact component={ContactUs} path="/AppDoctor"/>
               <Route exact component={Main} path="/covid_info"/>
               <Route exact component={Home} path="/"/>
                {/* <Route exact component={Billpay} path="/buy/:price"/> */}
               </Switch>
              </BrowserRouter>
        </div>
    );
};

export default Routes;