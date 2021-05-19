import {Accordion,Card} from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';
import Footer from "../footer/Footer";
import "./style.css"
function Main()
{
    return(
      <div className="container " style={{marginTop: "150px"}}>
      <Accordion defaultActiveKey="0">
      {/* first  */}
    <Fade  top>
 <Card>
   <Accordion.Toggle  eventKey="0">
     Who declared Covid-19 as Pandemic?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="0">
   <HeadShake>
     <Card.Body>
     World Health Organisation
     </Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade>
 

 {/* second */}

 <Fade  top>
 <Card>
   <Accordion.Toggle eventKey="1">
     First Indian State who declared Corona Virus as Pandemic?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="1">
   <HeadShake>
     <Card.Body>Haryana</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade> 
 {/* third */}
  <Fade  top>
 <Card>
   <Accordion.Toggle  eventKey="2">
     Whic is the first state to impose lockdown due to corona virus?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="2">
   <HeadShake>
     <Card.Body>Rajasthan</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade> 

 {/* fourth */}
 <Fade  top>
 <Card>
   <Accordion.Toggle  eventKey="3">
     First Indian state to impose full curfew because of corona virus?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="3">
   <HeadShake>
     <Card.Body>Punjab</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade> 

 {/* 5th */}

 <Fade  top>
 <Card>
   <Accordion.Toggle eventKey="4">
     On Which date 'Janta Curfew' was imposed in india?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="4">
   <HeadShake>
     <Card.Body>22 March 2020</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade>

<Fade  top>
 <Card>
   <Accordion.Toggle  eventKey="5">
     What is novel Corona Virus?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="5">
   <HeadShake>
     <Card.Body>A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019 (COVID-19), is not the same as the coronaviruses that commonly circulate among humans and cause mild illness, like the common cold.</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade>

<Fade  top>
 <Card>
   <Accordion.Toggle  eventKey="6">
     Why is this disease being called corona virus disease 2019, COVID-2019?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="6">
   <HeadShake>
     <Card.Body>On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for disease. Formerly, this disease was referred to as “2019 novel coronavirus” or “2019-nCoV”</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade>

  <Fade  top>
 <Card>
   <Accordion.Toggle eventKey="7">
     How does te viru spread?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="7">
   <HeadShake>
     <Card.Body>The virus that causes COVID-19 most commonly spreads between people who are in close contact with one another (within about 6 feet, or 2 arm lengths).
    
     It spreads through respiratory droplets or small particles, such as those in aerosols, produced when an infected person coughs, sneezes, sings, talks, or breathes.

     </Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade>

 <Fade  top>
 <Card>
   <Accordion.Toggle eventKey="8">
     Will warm water break te outbreak of covid-19?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="8">
   <HeadShake>
     <Card.Body>It is not yet known whether weather and temperature affect the spread of COVID-19. Some other viruses, like those that cause the common cold and flu, spread more during cold weather months but that does not mean it is impossible to become sick with these viruses during other months.  There is much more to learn about the transmissibility, severity, and other features associated with COVID-19 and investigations are ongoing.</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade>

 <Fade  top>
 <Card>
   <Accordion.Toggle  eventKey="9">
     Am I at risk for Covid-19 from mail, packages or products?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="9">
   <HeadShake>
     <Card.Body>Coronaviruses are thought to be spread most often by respiratory droplets. Although the virus can survive for a short period on some surfaces, it is unlikely to be spread from domestic or international mail, products or packaging. However, it may be possible that people can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes, but this is not thought to be the main way the virus spreads.</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade>

 <Fade  top>
 <Card>
   <Accordion.Toggle  eventKey="10">
     Is it ok for me to donate blood?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="10">
   <HeadShake>
     <Card.Body>In healthcare settings across the United States, donated blood is a lifesaving, essential part of caring for patients. The need for donated blood is constant, and blood centers are open and in urgent need of donations. CDC encourages people who are well to continue to donate blood if they are able, even if they are practicing social distancing because of COVID-19.</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade>

 <Fade  top>
 <Card>
   <Accordion.Toggle  eventKey="11">
     Should I use soap and water or hand sanitiser to protect against covid-19?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="11">
   <HeadShake>
     <Card.Body>Handwashing is one of the best ways to protect yourself and your family from getting sick. Wash your hands often with soap and water for at least 20 seconds, especially after blowing your nose, coughing, or sneezing; going to the bathroom; and before eating or preparing food.</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade>


 <Fade  top>
 <Card>
   <Accordion.Toggle  eventKey="12">
     What should I do if I had close contact with someone who had Covid-19?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="12">
   <HeadShake>
     <Card.Body>The best way to protect yourself and others is to stay home for 14 days if you think you’ve been exposed to someone who has COVID-19.</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade>

 <Fade  top>
 <Card>
   <Accordion.Toggle  eventKey="13">
     how Can I prepare for covid-19 at my work?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="13">
   <HeadShake>
     <Card.Body>Plan for potential changes at your workplace. Talk to your employer about their emergency operations plan, including sick-leave policies and telework options. Learn how businesses and employers can plan for and respond to COVID-19.</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade>

 <Fade  top>
 <Card>
   <Accordion.Toggle  eventKey="14">
     What are the symptoms and compilations that covid-19 had caused?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="14">
   <HeadShake>
     <Card.Body>People with COVID-19 have reported a wide range of symptoms – from mild symptoms to severe illness. Symptoms may appear 2-14 days after exposure to the virus. If you have fever, cough, or other symptoms, you might have COVID-19.</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade>

 <Fade  top>
 <Card>
   <Accordion.Toggle  eventKey="15">
     Is it possible to have flu and covid at tha same time?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="15">
   <HeadShake>
     <Card.Body>Yes.</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade>

 <Fade  top>
 <Card>
   <Accordion.Toggle eventKey="16">
     Who is at the increased risk for developing severe illness?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="16">
   <HeadShake>
     <Card.Body>Older Adults Pregnant woman, People of all ages with certain underlying medical conditions</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade>

 <Fade  top>
 <Card>
   <Accordion.Toggle  eventKey="17">
     Am I at risk if I go to funeral or visitation service for someone who died of covid-19?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="17">
   <HeadShake>
     <Card.Body>There is currently no known risk associated with being in the same room at a funeral or visitation service with the body of someone who died of COVID-19. However, you may be at risk of getting COVID-19 if you attend a funeral where there are multiple people congregating.</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade>

 <Fade  top>
 <Card>
   <Accordion.Toggle  eventKey="18">
    Can I get covid-19 from my pets or other animals?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="18">
   <HeadShake>
     <Card.Body>Based on the limited information available to date, the risk of animals spreading COVID-19 to people is considered to be low. </Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade>

 <Fade  top>
 <Card>
   <Accordion.Toggle  eventKey="19">
     Can animal carry the virus that causes covid-19 on their skin or fur?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="19">
   <HeadShake>
     <Card.Body>Although we know certain bacteria and fungi can be carried on fur and hair, there is no evidence that viruses, including the virus that causes COVID-19, can spread to people from the skin, fur, or hair of pets.</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade>

 <Fade  top>
 <Card>
   <Accordion.Toggle  eventKey="20">
     Can I get Covid-19 from food?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="20">
   <HeadShake>
     <Card.Body>Currently there is no evidence that people can get COVID-19 by eating or handling food.

It may be possible that people can get COVID-19 by touching a surface or object, such as a food package or dining ware that has the virus on it and then touching their own mouth, nose, or possibly their eyes.</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade>

 <Fade  top>
 <Card>
   <Accordion.Toggle eventKey="21">
    What is a ideal distance between a person?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="21">
   <HeadShake>
     <Card.Body>6 Feet</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade>

 <Fade  top>
 <Card>
   <Accordion.Toggle eventKey="22">
     Can cloth masksbe orn in water?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="22">
   <HeadShake>
     <Card.Body>No, do NOT wear a cloth mask in the water. It can be difficult to breathe through a cloth mask when it is wet. Plus, wet cloth masks don’t slow the spread of the virus that causes COVID-19 as well as dry cloth masks.</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade>

 <Fade  top>
 <Card>
   <Accordion.Toggle  eventKey="23">
     What are corona symptoms?
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="23">
   <HeadShake>
     <Card.Body>Most common symptoms:
fever
dry cough
tiredness
Less common symptoms:
aches and pains
sore throat
diarrhoea
conjunctivitis
headache
loss of taste or smell
a rash on skin, or discolouration of fingers or toes
Serious symptoms:
difficulty breathing or shortness of breath
chest pain or pressure
loss of speech or movement</Card.Body>
     </HeadShake>
   </Accordion.Collapse>
 </Card>
 </Fade> 

 
  </Accordion>
  <Footer />
  </div>










    )
}

export default Main;