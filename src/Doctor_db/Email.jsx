import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button, Form } from 'react-bootstrap';
//import './ContactUs.css';
import "./style.css";
import Axios from "axios"
import { Alert } from '@material-ui/lab'
import { useHistory } from 'react-router-dom'
export default function ContactUs() {
  const [state, setState] = useState(
    {
      name: ""
    }

  )
  const [email, setEmail] = useState(
    {

      email: ""
    }


  )

  const [age, setAge] = useState(
    {

      age: ""
    }
  )

  const [phone, setPhone] = useState(
    {

      phone: ""
    }
  )
  const [message, setMessage] = useState(
    {
      message: ""
    }

  )
const history = useHistory()
  const Nameadd = async e => {
    await setState({
      name: e.target.value
    })
  }

  const Ageadd = async e => {
    await setAge({
      age: e.target.value
    })
  }

  const Phoneadd = async e => {
    await setPhone({
      phone: e.target.value
    })
  }
  const Emailadd = async e => {
    await setEmail({
      email: e.target.value
    })
  }

  const Messageadd = async e => {
    await setMessage({
      message: e.target.value
    })
  }


  
  function sendEmail(e) {
     e.preventDefault();
    emailjs.sendForm('service_tyu9l2i', 'template_94ec7lb', e.target, 'user_WogmvmakYl59Ce7UrymDV')
      .then((result) => {
        <Alert severity="success">This is a success alert — check it out!</Alert>
      }, (error) => {
        console.log(error.text);
      });

      Axios.post("http://localhost/index.php/",
      { name: state.name, age: age.age, email: email.email, message: message.message ,phone:phone.phone})
      //Axios.post(url,formData)
      .then(res =>  done())
      .catch(err => console.log(err));
  }
function done()
{
  alert("done")
  history.push('/Find');
}

  return (
    <div className="forms">
      <h1>Appointment</h1>
      <div className="box">
        <Form className="container" onSubmit={sendEmail}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control className="emails" type="text" onChange={Nameadd} value={state.name} name="name" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter Age</Form.Label>
            <Form.Control className="emails" type="number" onChange={Ageadd} value={age.age} name="age" placeholder="Enter Age" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter Phone Num</Form.Label>
            <Form.Control className="emails" type="number" onChange={Phoneadd} value={phone.phone} name="phone" placeholder="Enter Phone Number" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className="emails" type="email" value={email.email} onChange={Emailadd} name="user_email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
    </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label> Message</Form.Label>
            <Form.Control className="emails" type="text" value={message.message} onChange={Messageadd} name="enteryourmessage" placeholder="Message" />

          </Form.Group>

          <Button variant="primary" value="Send" className="btn" type="submit" >
            Submit
  </Button>
        </Form>
      </div>
    </div>
  );
}


// import React from 'react';
// import emailjs from 'emailjs-com';



// export default function ContactUs() {

//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('service_tyu9l2i', 'template_jdeqowg', e.target, 'user_WogmvmakYl59Ce7UrymDV')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   }

//   return (
//       <div style={{marginTop:"30%"}}>
//     <form className="contact-form" onSubmit={sendEmail}>
//       <input type="hidden" name="contact_number" />
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//     </div>
//   );
// }