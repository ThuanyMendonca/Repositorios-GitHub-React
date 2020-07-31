import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { GoEye, GoStar, GoRepoForked } from 'react-icons/go';

import colors from './colors';

import {
  Button,
  DivModal,
  Container,
  Item,
  NomeRepositorio,
  Url,
  Description,
  ItemsContainer,
  ItemText,
  LanguagesBarContainer,
  LanguagesBarItem,
  LanguagesContainer,
  LanguagesItem,
  LanguagesItemBall,
  LanguagesItemText,
} from './styles';

const ModalContent = ({ id, close }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingLanguages, setIsLoadingLanguages] = useState(false);
  const [repo, setRepo] = useState();
  const [languages, setLanguages] = useState([]);

  async function getLanguages(url) {
    setIsLoadingLanguages(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      let total = 0;

      const langs = Object.entries(data)
        .map(([key, value]) => {
          total += value;
          return {
            name: key,
            color: colors[key],
            value,
          };
        })
        .map(({ name, color, value }) => ({
          name,
          color,
          percent: `${((value / total) * 100).toFixed(2)}%`,
        }));

      setLanguages(langs);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoadingLanguages(false);
    }
  }

  useEffect(() => {
    async function getRepo() {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api.github.com/repositories/${id}`
        );

        const data = await response.json();

        setRepo(data);

        getLanguages(data.languages_url);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }

    getRepo();
  }, [id]);

  return (
    <DivModal>
      {isLoading ? (
        <Loader
          type="ThreeDots"
          color="#794bc4"
          height={48}
          width={48}
          timeout={3000}
        />
      ) : (
        repo && (
          <>
            <Container>
              <NomeRepositorio>{repo.name}</NomeRepositorio>
              <Url>{repo.html_url}</Url>
              <Description>{repo.description}</Description>
              <ItemsContainer>
                <Item>
                  <GoRepoForked size="1.5em" />
                  <ItemText>{repo.forks}</ItemText>
                </Item>
                <Item>
                  <GoEye size="1.5em" />
                  <ItemText>{repo.watchers}</ItemText>
                </Item>
                <Item>
                  <GoStar size="1.5em" />
                  <ItemText>{repo.stargazers_count}</ItemText>
                </Item>
              </ItemsContainer>
              {isLoadingLanguages ? (
                <Loader
                  type="ThreeDots"
                  color="#794bc4"
                  height={48}
                  width={48}
                  timeout={3000}
                  style={{ margin: '0 auto' }}
                />
              ) : (
                <>
                  <LanguagesBarContainer>
                    {languages.map((lang) => (
                      <LanguagesBarItem
                        style={{
                          width: lang.percent,
                          backgroundColor: lang.color,
                        }}
                      />
                    ))}
                  </LanguagesBarContainer>
                  <LanguagesContainer>
                    {languages.map((lang) => (
                      <LanguagesItem>
                        <LanguagesItemBall
                          style={{ backgroundColor: lang.color }}
                        />
                        <LanguagesItemText>
                          {lang.name} ({lang.percent})
                        </LanguagesItemText>
                      </LanguagesItem>
                    ))}
                  </LanguagesContainer>
                </>
              )}
            </Container>
          </>
        )
      )}
      <Button onClick={close}>Fechar</Button>
    </DivModal>
  );
};

export default ModalContent;
