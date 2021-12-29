import styled from "styled-components";
import bg from "../../pic/bg.jpeg";

export const LoginBg = styled.div`
  background: url(${bg});
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const Form = styled.div`
  background: white;
  height: 400px;
  width: 300px;
  border-radius: 20px;
  opacity: 0.5;
  box-shadow: 0 0 15px purple;
  position: absolute;
  top: 20vh;
  right: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 428px) {
    right: 10vw;
  }
`;

export const Title = styled.div`
  //border-topbackground-color: green;
  //height: 50px;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
`;

export const InputList = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
`;

export const Icon1 = styled.div`
  height: 35px;
  width: 35px;
  display: inline-flex;
  align-items: center;
  padding: 25px 0;
`;

export const Icon2 = styled.div`
  height: 35px;
  width: 35px;
  display: inline-flex;
  align-items: center;
  transform: translateX(-0%);
  opacity: 1;
`;

export const Input = styled.input`
  //background-color: blue;
  //height: 50px;
  width: 60%;
  font-size: 20px;
  font-weight: bold;
  border: none;
  box-sizing: border-box;
  border-bottom: 2px solid black;

  &:hover,
  &:focus {
    border-color: green;
    ${Icon2} {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const Button = styled.button`
  //background-color: yellowgreen;
  //height: 50px;
  width: 50%;
  font-size: 30px;
  font-weight: bold;
  border-radius: 30px;
  transition: all 0.3s ease;
  transform: translateX(50%);
  display: inline-flex;
  justify-content: space-evenly;

  &:hover {
    box-shadow: 0 0 15px green;
  }
`;

export const RegisterText = styled.div`
  //height: 10px;
  width: 100%;
  text-align: center;

  &:hover {
    color: blue;
    font-weight: bold;
  }
`;

export const Eye = styled.div`
  height: 35px;
  width: 35px;
  transform: translateX(-100%);
  opacity: 1;
  cursor: pointer;
`;

export const Eye2 = styled.div`
  height: 35px;
  width: 35px;
  transform: translateX(-100%);
  opacity: 0;
  cursor: pointer;
`;
