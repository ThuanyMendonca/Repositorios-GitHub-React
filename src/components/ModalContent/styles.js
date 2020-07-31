import styled from 'styled-components';

export const DivModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2em;
`;

export const Button = styled.button`
  background: #794bc4;
  color: #ffffff;
  padding: 0.75em 2.5em;
  border: 2px solid #794bc4;
  border-radius: 10px;
  text-align: center;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 1em;
  margin-top: 2em;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const NomeRepositorio = styled.h2`
  color: #794bc4;
  font-size: 1.5em;
  margin-bottom: 0.2em;
  text-align: center;
`;

export const Url = styled.h2`
  font-size: 0.75em;
  margin-bottom: 1.75em;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 1em;
  margin-bottom: 1em;
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  margin: 0.5em 0;
`;

export const Item = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
`;

export const ItemText = styled.span`
  margin-left: 0.5em;
`;

export const LanguagesBarContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1em;
`;

export const LanguagesBarItem = styled.div`
  height: 5px;
`;

export const LanguagesContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const LanguagesItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.25em;
  margin-bottom: 0.5em;
`;

export const LanguagesItemBall = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;

export const LanguagesItemText = styled.span`
  margin-left: 0.5em;
  font-size: 0.8em;
`;
