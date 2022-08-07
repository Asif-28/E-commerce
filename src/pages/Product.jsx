import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import { Products } from "../components/Products";
import mobile from "../Responsive";
const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 90vh;
  ${mobile({ height: "50vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
`;
const Desc = styled.p`
  font-size: 20px;
  margin: 20px 0;
`;
const Price = styled.div`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  width: 50%;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterColor = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin-left: 5px;
  cursor: pointer;
`;

const FilterTitle = styled.span`
  font-size: 25px;
  font-weight: 200;
`;

const FilterSize = styled.select`
  font-size: 15px;
  padding: 8px;
  margin-left: 10px;
  font-weight: bold;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid green;
  background-color: white;
  font-size: 20px;
  font-weight: 300;

  &:hover {
    color: white;
    background-color: purple;
    border: none;
  }
`;
const Product = ({ cat, filters, sort }) => {
  console.log(cat, filters, sort);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://5.imimg.com/data5/GR/KB/MY-38651239/mens-denim-shirt-500x500.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Shirt</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            cupiditate reiciendis voluptatum. Amet accusantium necessitatibus
            magnam voluptates veniam, ipsam tempora.
          </Desc>
          <Price>Rs- 999.</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="DarkBlue" />
              <FilterColor color="Black" />
              <FilterColor color="Gray " />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
