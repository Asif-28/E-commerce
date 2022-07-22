import styled from "styled-components";
const Container = styled.div`
  flex: 1;
  margin: 4px;
  height: 50vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  letter-spacing: 2px;
`;
const Button = styled.button`
  border: none;
  padding: 12px;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 2px;
`;
const CategorieItems = ({ item }) => {
  return (
    <Container>
      <Image src={item.img}></Image>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW </Button>
      </Info>
    </Container>
  );
};

export default CategorieItems;
