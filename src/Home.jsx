import React from 'react';

import Main from "./Carousel/main"
import TagLine from "./tagLine_vis_mis/tagLine"
import Vml from "./tagLine_vis_mis/vml"
import Mains from "./TimeLine/main"
import Video from "./videos/main"
import BgOfSLOGANS from "./slogans/bgOfSLOGANS"
import Cardmain from "./blogs/main"
import Footer from "./footer/Footer"
import '@fortawesome/fontawesome-free/css/all.min.css'; import
    'bootstrap-css-only/css/bootstrap.min.css'; import
    'mdbreact/dist/css/mdb.css';
const Home = () => {
    return (
        <div>
           
            <Main />
            <TagLine />
            <Vml />
            <Mains />
            <Video />
            <BgOfSLOGANS />
            <Cardmain />
            <Footer />
        </div>
    );
};

export default Home;