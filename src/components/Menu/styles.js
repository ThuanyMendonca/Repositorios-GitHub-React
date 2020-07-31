import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  box-sizing: border-box;
  max-height: 100vh;
`;

export const ContentContainer = styled.div`
  flex: 1;
  box-sizing: border-box;
  overflow-y: auto;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  background: #222831;
  height: 4em;
  width: 100%;
  padding: 0 5em;
  flex: 0;
  box-sizing: border-box;
  box-shadow: 0 2px 4px #121212;
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const A = styled.a`
  position: relative;
  display: inline-block;
  padding: 1em;
  text-decoration: none;
  color: #fff;
  justify-content: flex-end;
`;
