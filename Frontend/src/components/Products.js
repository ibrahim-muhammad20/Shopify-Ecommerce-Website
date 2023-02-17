import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../data";
import axios from "axios";

const Container = styled.div`
  display: flex;
  margin: 10px;
  flex-wrap: wrap;
`;
const Products = ({ category, filters }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/product?category=${category}`
            : "http://localhost:5000/api/product"
        );
        console.log(res);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(
            ([key, value]) => item[key].includes(value) //key="color &size" //value="Yellow &mediu,"
          )
        )
      );
  }, [products, category, filters]);

  // useEffect(() => {
  //   if ((order = "newest")) {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => a.createdAt - b.createdAt)
  //     );
  //   } else if ((order = "asc")) {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => a.price - b.price)
  //     );
  //   } else {
  //     order = "desc";
  //     {
  //       setFilteredProducts((prev) =>
  //         [...prev].sort((a, b) => b.price - a.price)
  //       );
  //     }
  //   }
  // }, [order]);
  console.log(filteredProducts);
  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : popularProducts.map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
