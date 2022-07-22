import { FavoriteBorderOutlined, SearchOutlined } from "@material-ui/icons";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 350px;
`;
const Circle = styled.div`
  border-radius: 50%;
`;
const Info = styled.div`
  display: flex;
`;
const Image = styled.img`
  height: 75%;
`;
const Icon = styled.div``;
export const Product = ({ item }) => {
  return (
    <Container>
      <Circle>
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
      </Circle>
    </Container>
  );
};
