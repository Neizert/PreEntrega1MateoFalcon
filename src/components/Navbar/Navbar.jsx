import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../Navbar/CartWidget'


function Navbar1() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container >
          <Navbar.Brand href="#home">Kiosko Matu</Navbar.Brand>
          <Nav className="me-auto">
           
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link ><CartWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default Navbar1;