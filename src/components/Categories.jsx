import styled from "styled-components";
import { categories } from "../data";
import CategorieItems from "./CategorieItems";
import mobile from "../Responsive";
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategorieItems item={item} />
      ))}
    </Container>
  );
};

export default Categories;
