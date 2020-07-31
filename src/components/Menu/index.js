import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
  Container,
  ContentContainer,
  Nav,
  LogoutButton,
  PageName,
  WelcomeContainer,
  OptionsContainer,
  User,
} from './styles';

import { logout } from '../../actions';

// eslint-disable-next-line no-shadow
const Menu = ({ children, logout, username }) => {
  const { pathname } = useLocation();

  let titulo = '';

  if (pathname.includes('pesquisar')) titulo = 'Pesquisar';
  else if (pathname.includes('repositorios')) titulo = 'Repositórios';

  return (
    <Container>
      <Nav>
        <WelcomeContainer>
          Seja bem-vindo, <User>{username}</User> !
        </WelcomeContainer>
        <PageName>{titulo}</PageName>
        <OptionsContainer>
          <LogoutButton href="/" onClick={() => logout()}>
            Logout
          </LogoutButton>
        </OptionsContainer>
      </Nav>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  username: state.username,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
