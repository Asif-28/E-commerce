import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
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
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
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
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
