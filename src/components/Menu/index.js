import React from 'react';
import { Container, ContentContainer, Nav, Ul, A } from './styles';

const Menu = ({ children }) => {
  return (
    <Container>
      <Nav>
        <Ul>
          <li>
            <A>Usuario</A>
          </li>
          <li>
            <A href="/">Logout</A>
          </li>
        </Ul>
      </Nav>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default Menu;
