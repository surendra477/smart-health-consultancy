import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { auth,provider } from  "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import "./style.css"
import logo1 from "../imgs/logo1.gif"
const NavBar = () => {
  const [user] = useAuthState(auth);
    //var User = auth().currentUser;
    
    return (
        <div>
<Navbar bg="light" expand="lg" fixed="top">
  <Navbar.Brand href="/">
  <img style={{width: "200px",height:"100px",padding:"0px" ,margin: "0px"}} src={logo1} alt="hello" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Find">Find Docter</Nav.Link>
     <Nav.Link href="/covid_info">COVID INFO.</Nav.Link>
        {/* <Nav.Link href="#link">Contact</Nav.Link> */}
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
    
  </Navbar.Collapse>
   <Navbar.Collapse className="justify-content-end mr-auto"> 
    
    <Nav.Link  className="bgs ">{user ?<SignOut />:<SignIn /> } </Nav.Link>
    {/* <Nav.Link href="#link" className="bgs">Sign up </Nav.Link> */}
    
   </Navbar.Collapse>
</Navbar>
        </div>
    );
};



function SignOut() {

 
  return auth.currentUser && (
    
    <div  onClick={() => auth.signOut()}>Sign Out</div>
   
  )
}
function SignIn() {

  const signInWithGoogle = () => {
    // const provider = auth.GoogleAuthProvider();
     auth.signInWithPopup(provider).catch((error) => alert(error.message))
    // auth.signInWithPopup(provider);
  }
   return (
    <>
    
      <div   onClick={signInWithGoogle}>Sign In</div>
      
      
    </>
  )
}


export default NavBar;



