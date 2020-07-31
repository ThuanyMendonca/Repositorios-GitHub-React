import React from 'react';
import { connect } from 'react-redux';

import { Container, ContentContainer, Nav, Ul, A } from './styles';

import { logout } from '../../actions';

// eslint-disable-next-line no-shadow
const Menu = ({ children, logout, username }) => {
  return (
    <Container>
      <Nav>
        <Ul>
          <li>
            <A>{username}</A>
          </li>
          <li>
            <A href="/" onClick={() => logout()}>
              Logout
            </A>
          </li>
        </Ul>
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
