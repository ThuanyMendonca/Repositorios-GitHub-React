import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import {
  Input,
  Container,
  Button,
  ButtonRepo,
  Table,
  Background,
  Td,
  Th,
  SearchContainer,
  ContainerLoader,
} from './styles';

const Pesquisar = () => {
  const [user, setUser] = useState();
  const [errorNotFound, setErrorNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');

  const history = useHistory();

  const search = async () => {
    setUser();
    setErrorNotFound(false);
    setIsLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/${name}`);
      const data = await response.json();

      if (response.status === 404) {
        setErrorNotFound(true);
      } else {
        setUser(data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const redirectToRepositories = () => {
    history.push(`/app/repositorios/${user.login}`);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Background>
        <SearchContainer>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
          />
          <Button
            onClick={() => search()}
            disabled={name.trim() === '' || isLoading}
          >
            Buscar
          </Button>
        </SearchContainer>
        <Container>
          {isLoading && (
            <ContainerLoader>
              <Loader
                type="ThreeDots"
                color="#794bc4"
                height={48}
                width={48}
                timeout={3000}
              />
            </ContainerLoader>
          )}
          {errorNotFound && <h3>Usuário não encontrando</h3>}
          {user && (
            <>
              <Table>
                <tr>
                  <Th>ID</Th>
                  <Th>Nome</Th>
                  <Th>Login</Th>
                  <Th>Repositórios</Th>
                </tr>

                <tr>
                  <Td>{user.id}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.login}</Td>
                  <Td>
                    <ButtonRepo onClick={redirectToRepositories}>
                      Visualizar
                    </ButtonRepo>
                  </Td>
                </tr>
              </Table>
            </>
          )}
        </Container>
      </Background>
    </div>
  );
};

export default Pesquisar;
