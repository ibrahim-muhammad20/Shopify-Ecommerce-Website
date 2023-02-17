import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Context } from "../context/Context";
import { useContext, useState } from "react";
import axios from "axios";
// import { login } from "../redux/apiCalls";
// import { useDispatch } from "react-redux";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.2)
    ),
    url("./images/shop1.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })};
`;

const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  min-width: 40%;
  margin: 10px 0px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
`;

const Button = styled.button`
  border: none;
  width: 40%;
  margin-top: 3px;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Link = styled.a`
  display: flex;
  align-content: center;
  justify-content: center;
  font-style: 12px;
  margin: 10px 0px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: red;
  }
`;

const Login = () => {
  const [error, setError] = useState(false);
  const { user, dispatch, isFetching } = useContext(Context);
  const [user2, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = ({ currentTarget: input }) => {
    setUser({ ...user2, [input.name]: input.value });
  };
  const Redirect = async (e) => {
    e.preventDefault();
    window.location.replace("/login");
  };

  // const dispatch1 = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    //   login(dispatch1, { user2 });

    //useContext

    dispatch({ type: "LOGIN_START" });
    setError(false);
    try {
      await axios
        .post("http://localhost:5000/api/auth/login", user2)
        .then((res) => dispatch({ type: "LOGIN_SUCCESS", payload: res.data }));
      // const res = await axios.post("/auth/login", {
      //   username: userRef.current.value,
      //   password: passwordRef.current.value,
      // window.onload
      window.location.replace("/home");
      setUser({
        username: "",
        password: "",
      });
    } catch (error) {
      setError(true);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            value={user2.username}
            name="username"
            placeholder="Enter you username"
          />

          <Input
            onChange={handleChange}
            value={user2.password}
            name="password"
            placeholder="Enter you password"
          />

          <ButtonContainer>
            <Button>Log In</Button>
          </ButtonContainer>

          <button>Did you Forget your Password?</button>
          <button onClick={Redirect}>Create a New Account!</button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
