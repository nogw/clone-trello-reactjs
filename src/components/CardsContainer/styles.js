import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 45px;
  padding: 0px 6px;
  display: flex;
  height: 100%;
  
  .menu {
    width: 100%;
  }
  .menu-primary-enter {
    position: absolute;
    transform: translateY(-8%);
    opacity: 0;
  }
  .menu-primary-enter-active {
    transform: translateY(0%);
    transition: all 350ms ease;
    opacity: 1;
  }
  .menu-primary-exit {
    position: absolute;
  }
  .menu-primary-exit-active {
    transform: translateY(-8%);
    transition: all 350ms ease;
    opacity: 0;
  }
  .menu-secondary-enter {
    transform: translateY(8%);
    opacity: 0;
  }
  .menu-secondary-enter-active {
    transform: translateY(0%);
    transition: all 350ms ease;
    opacity: 1;
  }
  .menu-secondary-exit {
  }
  .menu-secondary-exit-active {
    transform: translateY(8%);
    transition: all 350ms ease;
    opacity: 0;
  }
`;

export const CardsContainer = styled.div`
  position: relative;
`;

export const Cards = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  width: 272px;
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const AddNewList = styled.div`
  display: flex;
  align-items: center;
  height: 46px;
  width: 272px;
  background-color: #4d95be;
  color: #fff;
  margin: 4px 8px 4px 4px;
  padding: 6px;
  border-radius: 6px;
  font-size: 14px;
  flex-shrink:0;
  cursor: pointer;
  transition: all 400ms ease;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const AddNewListActive = styled.div`
  background-color: #ebecf0;
  border-radius: 4px;
  margin: 4px 8px 4px 4px;
  padding: 5px;
  width: 272px;
  display: flex;
  flex-direction: column;
  flex-shrink:0;

  input {
    width: 100%;
    border: 2px solid #0079bf;
    padding: 8px;
    border-radius: 5px;
  }
  .buttons {
    display: flex;
    align-items: center;
    font-size: 13.3333px;
    margin-top: 5px;

    button {
      background-color: #5aac44;
      color: #fff;
      outline: none;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
      cursor: pointer;
      -webkit-transition: all 400ms ease;
      transition: all 400ms ease;
    }

    .MuiSvgIcon-root {
      color: #6b778c;
      font-size: 24px;
      margin: 5px;
      cursor: pointer;
      -webkit-transition: all 400ms ease;
      transition: all 400ms ease;
    }
  }
`;

export const CardToAdd = styled.div`
  display: flex;
  height: 100%;
`