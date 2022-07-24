import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: purple;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
`;
const Announcement = () => {
  return (
    <Container>Super Deal! Free Shopping On orders above Rs 500.!!!!</Container>
  );
};

export default Announcement;
