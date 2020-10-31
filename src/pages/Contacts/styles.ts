import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 4% 10% 4%;

  form {
    width: 100%;
    max-width: 650px;

    h1 {
      text-align: center;
      color: var(--white);
      margin-top: 10px;
    }
  }

  form fieldset {
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 30px 20px;
    margin-top: 10px;
    border-radius: 8px;
    background-color: var(--secundary);
    border: none;
    -webkit-box-shadow: 0px 0px 30px -12px var(--white);
    -moz-box-shadow: 0px 0px 30px -12px var(--white);
    box-shadow: 0px 0px 30px -12px var(--white);
    position: relative;

    .user,
    .phone,
    .mail {
      position: absolute;
      right: 27px;
    }
    .user {
      top: 50px;
    }
    .phone {
      top: 110px;
    }
    .mail {
      top: 170px;
    }
  }

  form fieldset input {
    border-radius: 4px;
    border: 1px solid var(--light);
    padding: 10px 40px 10px 10px;
    margin: 10px 0;
    font-size: 16px;
    color: var(--dark);

    &:hover,
    &:focus {
      box-shadow: 1px 1px 5px 0px var(--dark);
      -webkit-box-shadow: 1px 1px 5px 0px var(--dark);
      -moz-box-shadow: 1px 1px 5px 0px var(--dark);
    }
  }

  form fieldset button {
    width: 150px;
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    color: var(--secundary);
    background-color: var(--dark);
    border: 1px solid var(--dark);
    text-transform: uppercase;
    margin: 20px auto 0 auto;
    border-radius: 5px;
    transition: ease-in-out 0.3s;

    &:hover {
      color: var(--dark);
      background-color: var(--white);
      box-shadow: 1px 1px 5px 0px var(--dark);
      -webkit-box-shadow: 1px 1px 5px 0px var(--dark);
      -moz-box-shadow: 1px 1px 5px 0px var(--dark);
    }
  }
`;

export const List = styled.div`
  max-width: 650px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  margin-top: 20px;
  border-radius: 8px;
  background-color: var(--secundary);
  border: none;
  -webkit-box-shadow: 0px 0px 30px -12px var(--white);
  -moz-box-shadow: 0px 0px 30px -12px var(--white);
  box-shadow: 0px 0px 30px -12px var(--white);
  text-align: center;

  table {
    width: 100%;

    tbody td {
      padding: 10px 4px;
      overflow-wrap: anywhere;
    }
  }
`;

export const Button = styled.button`
  border: none;
  background: none;

  svg {
    color: var(--dark);

    &:hover {
      color: var(--light);
    }
  }
`;
