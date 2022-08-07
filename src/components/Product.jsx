import { FavoriteBorderOutlined, SearchOutlined } from "@material-ui/icons";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";
import mobile from "../Responsive";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 5px;
  min-width: 400px;
  height: 400px;
  position: relative;
  background-color: #f5fbfb;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 280px;
  height: 280px;
  position: absolute;
  background-color: white;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  ${mobile({ width: "85%" })};
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.5);
    transition: all 0.6s ease;
  }
`;
export const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined></ShoppingCartOutlined>
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};
