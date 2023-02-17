import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { React, useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import ProductTile from "../pages/ProductTile";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect,
} from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.button`
  font-size: 14px;
  background-color: greenyellow;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Prod = [
  {
    name: "shirt1",
    id: 1,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
  },
  {
    name: "cap1",
    id: 2,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
  },
  {
    name: "shirt2",
    id: 3,
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
  },
  {
    name: "cap2",
    id: 4,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
  },
  {
    name: "two",
    id: 5,
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
  },
  {
    name: "bag",
    id: 6,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
  },
  {
    name: "cap3",
    id: 7,
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
  },
  {
    name: "yellow shirt",
    id: 8,
    img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
  },
  {
    name: "coat",
    id: 9,
    img: "https://www.pngarts.com/files/1/Fabric-Suit-PNG-Picture.png", //formal suit
  },
];

const Navbar = () => {
  const [products, setProducts] = useState([]);
  const [searchString, setSearchString] = useState("");
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  //redux
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);

  useEffect(() => {
    // const getProducts = async () => {
    //   try {
    //     const res = await axios.get("http://localhost:5000/api/product{searchString}");
    //     console.log(res);
    //     setProducts(res.data);
    //   } catch (err) {}
    // };
    // getProducts();

    setProducts(Prod.filter((item) => item.name == searchString));
  }, [searchString]);

  console.log(products);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <div className="flex w-full">
            <SearchContainer>
              <Input
                placeholder="Search"
                onChange={(e) => setSearchString(e.target.value)}
              />

              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </div>
          {searchString &&
            products.map((item) => <ProductTile product={item} />)}
        </Left>
        <Center>
          <Logo>SHOBIFY</Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/register">REGISTER</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login">SIGN IN</Link>
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <Link to="/">{user && "SIGN OUT"}</Link>
          </MenuItem>

          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <Link to="/cart">
                <ShoppingCartOutlined />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
