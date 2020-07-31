import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import swal from '@sweetalert/with-react';

import { Input, Container, Wrapper, Button, Titulo } from './styles';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signin = () => {
    if (user === 'admin' && password === 'password') {
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

export default Login;
