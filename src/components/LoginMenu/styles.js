import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;

  .menu {
    width: 100%;
  }

  .menu-primary-enter {
    position: absolute;
    transform: translateY(5%) scale(0.7);
    opacity: 0;
  }
  .menu-primary-enter-active {
    transform: translateY(0%)  scale(1);
    transition: all 450ms ease;
    opacity: 1;
  }
  .menu-primary-exit {
    position: absolute;
  }
  .menu-primary-exit-active {
    transform: translateY(5%)  scale(0.7);
    transition: all 450ms ease;
    opacity: 0;
  }
  .menu-secondary-enter {
    transform: translateY(5%) scale(0.7);
    opacity: 0;
  }
  .menu-secondary-enter-active {
    transform: translateY(0%) scale(1);
    transition: all 450ms ease;
    opacity: 1;
  }
  .menu-secondary-exit {
  }
  .menu-secondary-exit-active {
    transform: translateY(5%) scale(0.7);
    transition: all 450ms ease;
    opacity: 0;
  }
`;

export const LoginContainer = styled.div`
  background-color: #fff;
  box-shadow: rgba(0,0,0,0.1) 0 0 10px;
  border-radius: 3px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  width: 300px;

  a {
    color: #0762d3;
    margin-top: 12px;
    cursor: pointer;
    text-decoration: underline;
    font-weight: bold;
    font-size: 11px;
  }

  p {
    color: #253858;
    font-weight: bold;
    font-size: 16px;
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 14px;

    input {
      border: 2px solid #dfe1e6;
      padding: 8px;
      border-radius: 2px;
      margin: 5px;
      width: 100%;
      transition: all 300ms ease;

      &:focus {
        border: 2px solid #0079bf;
      }

      &::placeholder {
        font-size: 14px;
      }
    }

    button {
      background-color: #0079bf;
      border-radius: 2px;
      width: 100%;
      color: #fff;
      padding: 6px;
      margin: 5px;
      padding: 8px;
      font-size: 14px;
      font-weight: bold;
      border: none;
      cursor: pointer;
      transition: all 200ms ease; 

      &:hover {
        filter: brightness(0.9);
      }
    }

  }
`;