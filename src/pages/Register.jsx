import { flexbox } from "@mui/system";
import styled from "styled-components";

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
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 20px 10px 0px 0px;
`;
const Agreement = styled.span`
  font-size: 14px;
  font-weight: 300;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  background-color: purple;
  padding: 15px;
  color: white;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create A New Account </Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder=" Last name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b> PRIVACY POLICY</b>
          </Agreement>
          <Button>Create </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
