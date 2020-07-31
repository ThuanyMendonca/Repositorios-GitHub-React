import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import swal from '@sweetalert/with-react';
import { connect } from 'react-redux';

import { Input, Container, Wrapper, Button, Titulo } from './styles';

import { login } from '../../actions';

// eslint-disable-next-line no-shadow
const Login = ({ login, username }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signin = () => {
    if (user === 'admin' && password === 'password') {
      login(user);
      history.push('/app/pesquisar');
    } else {
      swal({
        title: 'Login incorreto.',
        text: 'Verifique suas credenciais.',
        type: 'info',
        icon: 'info',
        timer: 10000,
      });
    }
  };

  if (username) history.push('/app/pesquisar');

  return (
    <Container>
      <Wrapper>
        <Titulo>Prova Front-End</Titulo>
        <Input
          type="text"
          placeholder="Usuário"
          onChange={(e) => setUser(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={() => signin()}>Login</Button>
      </Wrapper>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (username) => dispatch(login(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
