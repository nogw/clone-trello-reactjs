import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;

  background-color: #0067a3;
  height: 40px;
  align-items: center;
  padding: 0px 2px;

  .Avatar {
    height: 34px;
    width: 34px;
    margin: 2px;
    background-color: #22c453;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const IconButton = styled.div`
  background-color: #4d95be;
  border-radius: 4px;
  color: #fff;
  height: 34px;
  width: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  cursor: pointer;
  transition: filter 200ms ease;

  &:hover {
    filter: brightness(0.9);
  }

  .MuiSvgIcon-root {
    font-size: 20px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  margin: 0 auto 0 auto;
  opacity: 0.6;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  .MuiSvgIcon-root {
    font-size: 21px;
  }

  h1 {
    font-size: 21px;
  }
`;