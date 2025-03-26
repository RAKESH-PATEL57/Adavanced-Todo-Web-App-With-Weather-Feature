import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>
          &copy; {new Date().getFullYear()} Advanced Todo App. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;