import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

const CustomBar = () => {
  return (
    <Container>
      <Navbar expand='lg' variant='light' bg='light'>
        <Container>
          <Navbar.Brand href="#">NewspaperEntries Table</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
};

export default CustomBar;
