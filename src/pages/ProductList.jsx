import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import { Products } from "../components/Products";
const Container = styled.div``;
const Title = styled.h1``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 8px;
  margin-right: 20px;
`;
const Option = styled.option``;
export const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products : </FilterText>
          <Select>
            <Option disabled selected>
              color
            </Option>
            <Option>red</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>blue</Option>
            <Option>purple</Option>
            <Option>pink</Option>
          </Select>
          <Select>
            <Option disabled selected>
              size
            </Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option selected> Newest</Option>
            <Option>Price (high)</Option>
            <Option>Price (low)</Option>
          </Select>
        </Filter>
        <Filter></Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};