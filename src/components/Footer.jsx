import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import mobile from "../Responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialConatiner = styled.div`
  display: flex;
`;
const SocialItems = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3px;
  cursor: pointer;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  margin-bottom: 20px;
  width: 50%;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "lightgray" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Sold.com</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sunt
          autem facere odit dignissimos cumque esse, voluptas aspernatur ullam
          dolores ratione hic aut?
        </Desc>
        <SocialConatiner>
          <SocialItems color="3B5999">
            <Facebook />
          </SocialItems>
          <SocialItems color="E4405F">
            <Instagram />
          </SocialItems>
          <SocialItems color="55ACEE">
            <Twitter />
          </SocialItems>
        </SocialConatiner>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart </ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion </ListItem>
          <ListItem>Kids Wea </ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account </ListItem>
          <ListItem>Wish list </ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Me</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 227 Aloklata 4BC kestopur
          kolkata
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91 7903916011
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px", cursor: "pointer" }} />
          <a
            href="mailto: asif.a.7277@gmail.com"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            asif.a.7277@gmail.com
          </a>
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
