import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: #ebecf0;
  border-radius: 4px;
  margin: 4px;
  height: 100%;
  width: 100%;
`;

export const ContentContainer = styled.div`

`;

export const Header = styled.div`
  padding: 5px 6px;
  display: flex;
  align-items: center;

  h1 {
    color: #172b4d;
    font-size: 14px;
    padding-left: 6px;
    line-height: 20px;
    border-radius: 4px;
    height: 28px;
    width: 100%;
    font-weight: 600;
    display: flex;
    align-items: center;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    min-height: 34px;
    min-width: 34px;

    &:hover {
      background-color: #dbdce0;
    }

    .MuiSvgIcon-root {
      color: #5e6c84;
      font-size: 20px;
    }
  }
`;

export const Content = styled.div`
  padding: 10px;
  margin: 4px 10px;
  border-radius: 4px;
  border-bottom: 1px solid #b2b8c4;
  background-color: #fff;
  color: #172b4d;
  overflow-wrap: break-word;
  font-size: 14px;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Add = styled.div`
  cursor: pointer;
  padding: 6px 6px;
  display: flex;
  align-items: center;

  h1 {
    color: #5e6c84;
    font-size: 14px;
    padding: 4px;
    line-height: 20px;
    border-radius: 4px;
    width: 100%;
    font-weight: 400;
    display: flex;
    align-items: center;

    &:hover {
      background-color: #dbdce0;
    }

    .MuiSvgIcon-root {
      color: #5e6c84;
      margin-top: 0.5px;
      font-size: 20px;
    }
  }
`;

export const AddNewCard = styled.div`
  margin: 10px;

  textarea {
    width: 100%;
    resize: none;
    border-radius: 4px;
    border: none;
    line-break: auto;
    padding: 10px;
    overflow: hidden;
    overflow-wrap: break-word;
    border-bottom: 1px solid #b2b8b4;
    background-color: #fff;
    color: #17315d;
    font-size: 14px;
  }

  .buttons {
    display: flex;
    align-items: center;
    margin-top: 8px;
    font-size: 13.3333px;

    button {
      background-color: #5aac44;
      color: #fff;
      outline: none;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
      cursor: pointer;
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