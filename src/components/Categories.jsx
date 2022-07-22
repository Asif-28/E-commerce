import styled from "styled-components";
import { categories } from "../data";
import CategorieItems from "./CategorieItems";
const Container = styled.div`
  display: flex;
  padding: 20px;
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