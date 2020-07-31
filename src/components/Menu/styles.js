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
  justify-content: space-between;
  align-items: center;
  background: #222831;
  height: 5em;
  width: 100%;
  padding: 1em 5em;
  flex: 0;
  box-sizing: border-box;
  box-shadow: 0 2px 4px #121212;
`;

export const LogoutButton = styled.a`
  padding: 1em 2.5em;
  text-decoration: none;
  color: #fff;
`;

export const PageName = styled.span`
  font-size: 2em;
  font-weight: 500;
  color: #794bc4;
  flex: 0;
`;

export const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

export const User = styled.h4`
  color: #794bc4;
  font-weight: bold;
  margin-left: 0.4em;
`;
