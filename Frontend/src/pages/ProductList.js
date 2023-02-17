import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcements from "../components/Announcements/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h3`
  font-size: 60px;
  text-align: center;
  text-decoration: underline;
`;
const FilterContainer = styled.h2`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })};
`;
const FilterText = styled.span`
  font-weight: 900px;
  font-size: 20px;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })};
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })};
`;

const Option = styled.option`
  height: 100%;
`;

const ProductList = () => {
  const [filters, setFilters] = useState({});
  const [order, setOrder] = useState("newest");

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters, //as not updating the Color and Size
      [e.target.name]: value,
    });
  };
  // const handleOrder = (e) => {
  //   const value = e.target.value;
  //   setOrder({
  //     ...filters, //as not updating the Color and Size
  //     [e.target.name]: value,
  //   });
  // };

  const location = useLocation(); //
  const category = location.pathname.split("/")[2]; //to fetch the  the category

  return (
    <>
      <Container>
        <Navbar />
        <Announcements />
        <Title>{category}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filters</FilterText>
            <Select name="color" onChange={handleFilter}>
              <Option selected>Choose Color</Option>
              <Option>white</Option>
              <Option>grey</Option>
              <Option>black</Option>
              <Option>red</Option>
              <Option>green</Option>
              <Option>yellow</Option>
              <Option>blue</Option>
            </Select>
            <Select name="size" onChange={handleFilter}>
              <Option selected>Size</Option>
              <Option>Small</Option>
              <Option>Medium</Option>
              <Option>XS</Option>
              <Option>XL</Option>
              <Option>XXL</Option>
            </Select>
          </Filter>
          {/* <Filter>
            <FilterText>Product Sort</FilterText>
            <Select onChange={(e) => setOrder(e.target.value)}>
              <Option selected>Newest</Option>
              <Option value="asc">Price(Ascending)</Option>
              <Option value="desc">Price(Descending)</Option>
            </Select>
          </Filter> */}
        </FilterContainer>
        <Products category={category} filters={filters} />
        <Newsletter />
        <Footer />
      </Container>
    </>
  );
};

export default ProductList;
