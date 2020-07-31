import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  background: transparent;
  outline: none;
  border-radius: 10px 0 0 10px;
  padding: 1em 2em;
  border: 2px solid #794bc4;
  width: 50vw;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  background: #794bc4;
  padding: 0.75em 2.5em;
  color: #ffffff;
  font-weight: 500;
  font-size: 1em;
  border: 2px solid #794bc4;
  border-radius: 0 10px 10px 0;
  text-align: center;
  outline: none;
  cursor: pointer;
`;

export const ButtonRepo = styled.button`
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
`;
export const Table = styled.table`
  border-collapse: collapse;
  width: 80vw;
`;

export const Td = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const Th = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  width: 40%;
  font-weight: bold;
`;

export const Carregando = styled.h4`
  color: #0ac2f7;
`;

export const ContainerLoader = styled.div`
  display: flex;
  justify-content: center;
`;
