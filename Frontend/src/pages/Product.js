import { Add, Remove } from "@material-ui/icons";
import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcements from "../components/Announcements/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import axios from "axios";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })};
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Img = styled.img`
  width: 100%;

  object-fit: cover;
  ${mobile({ height: "70vh" })};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })};
`;

const Title = styled.h3`
  font-size: 50px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-weight: bold;
  font-size: 20px;
`;

const Price = styled.span`
  font-weight: 400px;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })};
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const FilterTitle = styled.h2`
  margin: 20px 0px;
  padding-right: 5px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterOption = styled.option`
  display: flex;
  width: 50%;
  height: 20px;
`;

const FilterSelect = styled.select`
  padding: 5px;
  margin-left: 10px;
`;

const AddtoContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  ${mobile({ width: "100%" })};
`;
const AmountContainer = styled.div`
  margin: 40px 0px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
const Amount = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 30px;
  heigth: 30px;
  border-radius: 10px;
  background-color: white;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 20px;
  border: 2px solid teal;
  background-color: white;
  font-size: 15px;

  &:hover {
    background-color: red;
    cursor: pointer;
  }
`;
const Button1 = styled.button`
  border: 2px solid black;
  background-color: white;
  font-size: 15px;
  margin-right: 3px;
  &:hover {
    background-color: teal;
    cursor: pointer;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2]; //to fetch id of that product

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  //redux
  const dispatch = useDispatch();
  const removeQuantity = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };
  const addQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleClick = () => {
    dispatch(
      // addProduct({ product, quantity, price: product.price * quantity })
      addProduct({ ...product, quantity, color, size })
    );
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/product/find/${id}`
        );
        console.log(res);
        setProduct(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [id]);
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImgContainer>
          <Img src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>Description: {product.desc}</Desc>
          <Price>Price:${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {/* <FilterColor color="grey" /> */}
              {product.color?.map((col) => (
                <Button1>
                  <FilterColor
                    color={col}
                    key={col}
                    onClick={() => setColor(col)}
                  />
                </Button1>
              ))}
            </Filter>
            {console.log(color)};
            <Filter>
              <FilterTitle>SIZE</FilterTitle>
              <FilterSelect onChange={(event) => setSize(event.target.value)}>
                {product.size?.map((s) => (
                  <FilterOption key={s}>{s}</FilterOption>
                ))}
                {/* <FilterOption>LARGE</FilterOption> */}
              </FilterSelect>
            </Filter>
            {console.log(size)};
          </FilterContainer>
          <AddtoContainer>
            <AmountContainer>
              <Add onClick={addQuantity} />
              <Amount>{quantity}</Amount>
              <Remove onClick={removeQuantity} />
            </AmountContainer>
            <Button onClick={handleClick}>Add to Cart</Button>
          </AddtoContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
