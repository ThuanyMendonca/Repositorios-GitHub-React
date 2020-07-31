import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import Loader from 'react-loader-spinner';
import { GoArrowLeft } from 'react-icons/go';

import ModalContent from '../ModalContent';

import {
  ContainerLoader,
  Container,
  CardsContainer,
  Card,
  OptionsContainer,
  OptionText,
} from './styles';

Modal.setAppElement('#root');

const customModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 0,
    border: '3px solid #222831',
    backgroundColor: '#393e46',
    minHeight: '20vh',
    minWidth: '30vw',
    maxWidth: '60vw',
  },
};

const Repositorio = () => {
  const { userName } = useParams();
  const [result, setResult] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState();

  const history = useHistory();

  useEffect(() => {
    async function getRepositorios() {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api.github.com/users/${userName}/repos`
        );

        const data = await response.json();

        setResult(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }
    getRepositorios();
  }, [userName]);

  const openRepo = (id) => {
    setSelectedId(id);
    setModalIsOpen(true);
  };

  return (
    <Container>
      <OptionsContainer onClick={() => history.push('/app/pesquisar')}>
        <GoArrowLeft size="2em" /> <OptionText>Voltar para pesquisa</OptionText>
      </OptionsContainer>
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
      <CardsContainer>
        {result &&
          result.map((res) => (
            <Card onClick={() => openRepo(res.id)}>{res.name}</Card>
          ))}
      </CardsContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customModalStyles}
      >
        <ModalContent id={selectedId} close={() => setModalIsOpen(false)} />
      </Modal>
    </Container>
  );
};

export default Repositorio;
