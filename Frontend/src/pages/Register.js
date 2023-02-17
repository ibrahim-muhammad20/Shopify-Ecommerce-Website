import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import axios from "axios";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.2)
    ),
    url("./images/image1.png");
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
`;

const Agreeament = styled.h2`
  font-size: 12px;
  margin: 20px 0px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
`;
const Button = styled.button`
  border: none;
  width: 40%;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [user, setUser] = useState({
    name1: "",
    lname: "",
    username: "",
    email: "",
    password: "",
    c_pass: "",
  });
  const [error1, setError] = useState(false);
  const handleChange = ({ currentTarget: input }) => {
    setUser({ ...user, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      alert("Data Stored");
      // const url="/auth/register";
      await axios.post("http://localhost:5000/api/auth/register", user);
      window.location.replace("/login");
      setUser({
        username: "",
        password: "",
        phone: "",
        email: "",
      });
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(true);
      }
    }
  };
  // const[name,setName]=useState("")
  // const[lname,setlName]=useState("")
  // const[u_name,setUserName]=useState("")
  // const[email,setEmail]=useState("")
  // const[pass,setPass]=useState("")

  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        {console.log("User", user)}
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            name="name1"
            value={user.name1}
            placeholder="Enter you name"
          />
          <Input
            onChange={handleChange}
            name="lname"
            value={user.lname}
            placeholder="Enter you last name"
          />
          <Input
            onChange={handleChange}
            name="username"
            value={user.username}
            placeholder="Enter you username"
          />
          <Input
            onChange={handleChange}
            name="email"
            value={user.email}
            placeholder="Enter you email"
          />
          <Input
            onChange={handleChange}
            name="password"
            value={user.password}
            placeholder="Enter you password"
          />
          <Input
            onChange={handleChange}
            name="c_pass"
            value={user.c_pass}
            placeholder="Confirm Password"
          />
          <Agreeament>
            Kindly comfirm that you have provided authorized information.
          </Agreeament>
        </Form>
        <ButtonContainer>
          <Button onClick={handleSubmit}>Register Now!</Button>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default Register;
