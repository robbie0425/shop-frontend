import {
  LoginBg,
  Form,
  InputList,
  Input,
  Button,
  Title,
  Icon1,
  Icon2,
  RegisterText,
} from "../styled/login";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const history = useHistory();

  async function register() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // var auth = new FormData();
    // auth.append("username", email);
    // auth.append("password", password);
    let auth = {
      customerName: username,
      customerEmail: email,
      customerPassword: password,
    };
    try {
      let userId = await axios.post("/customer/login", email, {
        headers: { "Content-Type": "text/plain" },
      });
      let Id = userId.data.customerId;
      //console.log(Id);
      if (Id === undefined) {
        await axios.post("/customer/register", auth);
        alert("註冊成功");
        history.push("/login");
      } else {
        alert("信箱已被註冊過");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <LoginBg>
      <Form>
        <Title>Register</Title>
        <InputList>
          <Icon2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
            >
              <path
                fill="#C48B9F"
                d="M12,2A10,10,0,0,0,4.65,18.76h0a10,10,0,0,0,14.7,0h0A10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-5.55-2.25,6,6,0,0,1,11.1,0A8,8,0,0,1,12,20ZM10,10a2,2,0,1,1,2,2A2,2,0,0,1,10,10Zm8.91,6A8,8,0,0,0,15,12.62a4,4,0,1,0-6,0A8,8,0,0,0,5.09,16,7.92,7.92,0,0,1,4,12a8,8,0,0,1,16,0A7.92,7.92,0,0,1,18.91,16Z"
              />
            </svg>
          </Icon2>
          <Input placeholder="username" id="username"></Input>
        </InputList>
        <InputList>
          <Icon2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#C48B9F"
                d="M12,2a10,10,0,1,0,5,18.66,1,1,0,1,0-1-1.73A8,8,0,1,1,20,12v.75a1.75,1.75,0,0,1-3.5,0V8.5a1,1,0,0,0-1-1,1,1,0,0,0-1,.79A4.45,4.45,0,0,0,12,7.5,4.5,4.5,0,1,0,15.3,15,3.74,3.74,0,0,0,22,12.75V12A10,10,0,0,0,12,2Zm0,12.5A2.5,2.5,0,1,1,14.5,12,2.5,2.5,0,0,1,12,14.5Z"
              />
            </svg>
          </Icon2>
          <Input placeholder="email" id="email"></Input>
        </InputList>
        <InputList>
          <Icon2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#C48B9F"
                d="M12,8a2,2,0,0,0-2,2,2,2,0,0,0,1,1.72V15a1,1,0,0,0,2,0V11.72A2,2,0,0,0,14,10,2,2,0,0,0,12,8Zm0-6A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
              />
            </svg>
          </Icon2>
          <Input placeholder="password" id="password"></Input>
        </InputList>
        <Button onClick={register}>
          <Icon1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#C48B9F"
                d="M20.5,15.1a1,1,0,0,0-1.34.45A8,8,0,1,1,12,4a7.93,7.93,0,0,1,7.16,4.45,1,1,0,0,0,1.8-.9,10,10,0,1,0,0,8.9A1,1,0,0,0,20.5,15.1ZM21,11H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H21a1,1,0,0,0,0-2Z"
              />
            </svg>
          </Icon1>
          SignUp
        </Button>
        <Link to="/login">
          <RegisterText>Login</RegisterText>
        </Link>
      </Form>
    </LoginBg>
  );
};

export default Register;
