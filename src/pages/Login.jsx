import styled from "styled-components";
import mobile from "../Responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://cdn.pixabay.com/photo/2019/06/11/10/56/girl-4266712_960_720.jpg"),
    center;
  background-size: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ backgroundRepeat: "no-repeat", backgroundSize: "cover" })}
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 10px 0;
  ${mobile({ margin: "10px 10px" })}
`;

const Button = styled.button`
  width: 40%;
  border: none;
  background-color: purple;
  padding: 12px;
  color: white;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 15px;
  cursor: pointer;
  ${mobile({ margin: "10px 10px" })}
`;
const Link = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: underline;
  margin: 5px 0px;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN </Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />

          <Button>LOGIN </Button>
          <Link>DO YOU FORGOT THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
