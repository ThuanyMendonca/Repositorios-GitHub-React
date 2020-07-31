import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ContainerLoader = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.5em;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 5vw;
`;

export const Card = styled.div`
  background-color: #222831;
  padding: 1.5em;
  width: 15vw;
  height: 10vw;
  box-sizing: border-box;
  text-align: center;
  margin: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-all;
  cursor: pointer;
  box-shadow: 0 2px 4px #000;
  font-size: 18px;
  font-weight: 500;
  color: #794bc4;
  border-radius: 5px;
`;
