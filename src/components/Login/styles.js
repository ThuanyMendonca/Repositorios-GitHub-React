import styled from 'styled-components';

export const Input = styled.input`
  background: transparent;
  outline: none;
  border-radius: 10px;
  padding: 1em 2em;
  border: 2px solid #794bc4;
  width: 25vw;
  margin: 0.5em;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.button`
  background: #794bc4;
  color: #ffffff;
  padding: 0.5em 2.5em;
  border: 2px solid #794bc4;
  border-radius: 10px;
  text-align: center;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 1em;
  margin-top: 1em;
`;

export const Titulo = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 1em;
`;
