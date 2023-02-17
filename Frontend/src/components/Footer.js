import {
  Description,
  Facebook,
  Instagram,
  Mail,
  MailOutline,
  Phone,
  Room,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  ${mobile({ flexDirection: "column" })};
  display: flex;
`;
const Logo = styled.h1`
  font-size: 30px;
`;
const Left = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Desc = styled.div`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
  margin: 5px;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
  cursor: pointer;

  &:hover {
    background-color: red;
    transform: scale(1.1);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })};
`;

const Ctitle = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const Listitems = styled.li`
  width: 50%;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    color: red;
    font-weight: 700px;
  }
`;
// right end side of footer
const Right = styled.div`
  ${mobile({ backgroundColor: "#eee" })};
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;
const Paymentimg = styled.img`
  margin-top: 8px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Ibbibhai</Logo>
        <Desc>
          The services that we provide are the best! We are here to make all
          your purchases worth your while
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <YouTube />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Ctitle>Useful lists</Ctitle>
        <List>
          <Listitems>Inventory</Listitems>
          <Listitems>what to shop</Listitems>
          <Listitems>verification details</Listitems>
          <Listitems>About us</Listitems>
          <Listitems>Contact us</Listitems>
          <Listitems>Home page</Listitems>
          <Listitems>Shopify</Listitems>
          <Listitems>Sales</Listitems>
        </List>
      </Center>
      <Right>
        <Ctitle>Contact</Ctitle>
        <ContactItem>
          <Room style={{ marginRight: "5px" }} />
          16D,PGECHS-PHASE2,NEAR WAPDA TOWN,LAHORE
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "5px" }} /> (+92)321-475-8130
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "5px" }} />
          infotechmi22@gmail.com
        </ContactItem>
        <Paymentimg src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
