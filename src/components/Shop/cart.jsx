import { Link, useHistory } from "react-router-dom"; //useLocation
import { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../pic/logo.png";
import ScrollToTop from "../js/scrolltotop";
import Products from "./products";
import {
  Navbar,
  NavLeft,
  NavMid,
  NavRight,
  NavRight2,
  NavItem,
  NavIcon,
  CartCount,
} from "../styled/navbar";
import { Container } from "../styled/container";
import {
  Search,
  SearchBar,
  SearchInput,
  SearchProduct,
  SearchClose,
} from "../styled/search";
import {
  Main,
  Carts,
  NewTitle,
  CartContainer,
  CartHeader,
  CartTitle,
  RemoveAll,
  CartItem,
  ProductImg,
  CartAbout,
  ProductName,
  ProductInfo,
  CartCounter,
  Plus,
  Count,
  Minus,
  CartPrice,
  Amount,
  Total,
  Remove,
  CartTotal,
  CartLine,
  CartItemCount,
  CartTotalPrice,
  Checkout,
} from "../styled/main";
import {
  Footer,
  FooterBottom,
  FooterList,
  FooterItem,
  FooterTitle,
  FooterIcon,
  FooterIconList,
} from "../styled/footer";
import axios from "axios";

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Cart = () => {
  const history = useHistory();

  let pass = parseInt(localStorage.getItem("ID"));
  if (!pass) {
    history.push("/login");
  }

  //window.scrollTo({ top: 0 });
  //const location = useLocation();
  const [isopen, setIsopen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  function openNav() {
    setIsopen(!isopen);
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.addEventListener("resize", changeWidth);
    };
  }, []);

  function openSearch() {
    const searchID = document.getElementById("search");
    searchID.classList.toggle("active");
    //alert(document.getElementById("search").classList.contains("active"));
  }

  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0);
  const [newProducts, setNewProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);
  let cartId = JSON.parse(localStorage.getItem("cartId"));
  //console.log(cartId);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("/product");
      //console.log(result);
      //setProducts(result.data);
      //console.log(result.data);
      result.data.forEach((product) => {
        if (product.productNew === "Y") {
          newProducts.push(product);
          setNewProducts([...newProducts]);
          // (e) => e.concat(product);
        }
      });
    }
    fetchData();
  }, []);

  const search = async (e) => {
    if (e.target.value === "") {
      setSearchProduct([]);
    } else {
      console.log(e.target.value);
      const data = await axios.post("/product/search/", e.target.value, {
        headers: { "Content-Type": "text/plain" },
      });
      setSearchProduct(data.data);
    }
  };

  useEffect(() => {
    if (!cartId) {
      return;
    } else {
      async function fetchData() {
        for (let id of cartId) {
          const result = await axios.get(`/product/${id}`);
          result.data.count = 1;
          setCarts((old) => [...old, result.data]);
          let price = result.data.productPrice * result.data.count;
          setTotal((old) => old + price);
        }
        // cartId.forEach(async (id) => {
        //   const result = await axios.get(`/product/${id}`);
        //   result.data.count = 1;
        //   setCarts((old) => [...old, result.data]);
        // });
      }
      fetchData();
    }
  }, []);
  //console.log(carts);

  function deleteCart(cartDel) {
    cartId.splice(cartDel, 1);
    localStorage.setItem("cartId", JSON.stringify(cartId));
    window.location.reload();
  }
  function deleteAll() {
    cartId = [];
    localStorage.setItem("cartId", JSON.stringify(cartId));
    window.location.reload();
  }

  //const [count, setCount] = useState(1);

  function plus(cart) {
    cart.count++;
    let newcarts = carts.slice();
    setCarts(newcarts);
    setTotal((old) => old + cart.productPrice);
  }
  function minus(cart) {
    if (cart.count !== 1) {
      cart.count--;
      let newcarts = carts.slice();
      setCarts(newcarts);
      setTotal((old) => old - cart.productPrice);
    }
  }
  return (
    <>
      {/* {location.pathname === "/" && ( */}
      <Container>
        <Navbar>
          <NavLeft>
            <img src={logo} alt="logo"></img>
          </NavLeft>
          <NavRight2>
            <NavIcon onClick={openSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#C48B9F"
                  d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
                />
              </svg>
            </NavIcon>
            <StyledLink to="/cart">
              <NavIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="#C48B9F"
                    d="M19,7H16V6A4,4,0,0,0,8,6V7H5A1,1,0,0,0,4,8V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V8A1,1,0,0,0,19,7ZM10,6a2,2,0,0,1,4,0V7H10Zm8,13a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9H8v1a1,1,0,0,0,2,0V9h4v1a1,1,0,0,0,2,0V9h2Z"
                  />
                </svg>
                <CartCount>{carts.length}</CartCount>
              </NavIcon>
            </StyledLink>
            <StyledLink to="/wishlist">
              <NavIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="#C48B9F"
                    d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"
                  />
                </svg>
              </NavIcon>
            </StyledLink>
            <StyledLink to="/account">
              <NavIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#C48B9F"
                    d="M12,2A10,10,0,0,0,4.65,18.76h0a10,10,0,0,0,14.7,0h0A10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-5.55-2.25,6,6,0,0,1,11.1,0A8,8,0,0,1,12,20ZM10,10a2,2,0,1,1,2,2A2,2,0,0,1,10,10Zm8.91,6A8,8,0,0,0,15,12.62a4,4,0,1,0-6,0A8,8,0,0,0,5.09,16,7.92,7.92,0,0,1,4,12a8,8,0,0,1,16,0A7.92,7.92,0,0,1,18.91,16Z"
                  />
                </svg>
              </NavIcon>
            </StyledLink>
            <NavIcon onClick={openNav}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#C48B9F"
                  d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
                />
              </svg>
            </NavIcon>
          </NavRight2>
          {(isopen || screenWidth > 768) && (
            <NavMid>
              <StyledLink to="/">
                <NavItem>New</NavItem>
              </StyledLink>
              <StyledLink to="/lipstick">
                <NavItem>Lipstick</NavItem>
              </StyledLink>
              <StyledLink to="/perfume">
                <NavItem>Perfume</NavItem>
              </StyledLink>
              <StyledLink to="/mask">
                <NavItem>Facial Mask</NavItem>
              </StyledLink>
            </NavMid>
          )}
          <NavRight>
            <NavIcon onClick={openSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#C48B9F"
                  d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
                />
              </svg>
            </NavIcon>
            <StyledLink to="/cart">
              <NavIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="#C48B9F"
                    d="M19,7H16V6A4,4,0,0,0,8,6V7H5A1,1,0,0,0,4,8V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V8A1,1,0,0,0,19,7ZM10,6a2,2,0,0,1,4,0V7H10Zm8,13a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9H8v1a1,1,0,0,0,2,0V9h4v1a1,1,0,0,0,2,0V9h2Z"
                  />
                </svg>
                <CartCount>{carts.length}</CartCount>
              </NavIcon>
            </StyledLink>
            <StyledLink to="/wishlist">
              <NavIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="#C48B9F"
                    d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"
                  />
                </svg>
              </NavIcon>
            </StyledLink>
            <StyledLink to="/account">
              <NavIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#C48B9F"
                    d="M12,2A10,10,0,0,0,4.65,18.76h0a10,10,0,0,0,14.7,0h0A10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-5.55-2.25,6,6,0,0,1,11.1,0A8,8,0,0,1,12,20ZM10,10a2,2,0,1,1,2,2A2,2,0,0,1,10,10Zm8.91,6A8,8,0,0,0,15,12.62a4,4,0,1,0-6,0A8,8,0,0,0,5.09,16,7.92,7.92,0,0,1,4,12a8,8,0,0,1,16,0A7.92,7.92,0,0,1,18.91,16Z"
                  />
                </svg>
              </NavIcon>
            </StyledLink>
          </NavRight>
        </Navbar>
        <Search id="search">
          <SearchClose onClick={openSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#C48B9F"
                d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
              />
            </svg>
          </SearchClose>
          <SearchBar>
            <SearchInput
              placeholder=" Search..."
              onChange={search}
            ></SearchInput>
          </SearchBar>
          <SearchProduct>
            {searchProduct.map((product) => (
              <Products
                name={product.productName}
                price={product.productPrice}
                img={product.productImg}
                id={product.productId}
              ></Products>
            ))}
          </SearchProduct>
        </Search>
        <Main>
          <Carts>
            <NewTitle>Cart</NewTitle>
          </Carts>
          <CartContainer>
            <CartHeader>
              <CartTitle>Shopping Cart</CartTitle>
              <RemoveAll onClick={() => deleteAll()}>Remove All</RemoveAll>
            </CartHeader>
            {carts.map((cart, index) => (
              <CartItem>
                <ProductImg
                  src={"http://localhost:8080/productImg/" + cart.productImg}
                ></ProductImg>
                <CartAbout>
                  <ProductName>{cart.productName}</ProductName>
                  <ProductInfo>{cart.productCategory}</ProductInfo>
                </CartAbout>
                <CartCounter>
                  <Plus onClick={() => plus(cart)}>+</Plus>
                  <Count>{cart.count}</Count>
                  <Minus onClick={() => minus(cart)}>-</Minus>
                </CartCounter>
                <CartPrice>
                  <Amount>
                    ${cart.productPrice} * {cart.count}
                  </Amount>
                  <Total>= ${cart.productPrice * cart.count}</Total>
                  <Remove onClick={() => deleteCart(index)}>Remove</Remove>
                </CartPrice>
              </CartItem>
            ))}
            <CartLine>
              <CartTotal>
                <CartItemCount>{carts.length} items</CartItemCount>
                <CartTotalPrice>${total}</CartTotalPrice>
              </CartTotal>
              <Checkout>Checkout</Checkout>
            </CartLine>
          </CartContainer>
        </Main>
        <Footer>
          <FooterList>
            <FooterTitle>
              Shop
              <StyledLink to="/">
                <FooterItem>New</FooterItem>
              </StyledLink>
              <StyledLink to="/lipstick">
                <FooterItem>Lipstick</FooterItem>
              </StyledLink>
              <StyledLink to="/perfume">
                <FooterItem>Perfume</FooterItem>
              </StyledLink>
              <StyledLink to="/mask">
                <FooterItem>Facial Mask</FooterItem>
              </StyledLink>
            </FooterTitle>
            <FooterTitle>
              About
              <FooterItem>Company</FooterItem>
              <FooterIconList>
                <FooterIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#C48B9F"
                      d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z"
                    />
                  </svg>
                </FooterIcon>
                <FooterIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#C48B9F"
                      d="M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,.42-2.27C22,15.64,22,15.26,22,12S22,8.36,21.93,7.07Zm-2.54,8A5.73,5.73,0,0,1,19,16.87,3.86,3.86,0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35c-.79,0-1,0-3.06,0s-2.27,0-3.06,0A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81c0-.79,0-1,0-3.06s0-2.27,0-3.06A5.49,5.49,0,0,1,5,7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h0c.79,0,1,0,3.06,0s2.27,0,3.06,0A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81c0,.79,0,1,0,3.06S19.42,14.27,19.39,15.06Zm-1.6-7.44a2.38,2.38,0,0,0-1.41-1.41A4,4,0,0,0,15,6c-.78,0-1,0-3,0s-2.22,0-3,0a4,4,0,0,0-1.38.26A2.38,2.38,0,0,0,6.21,7.62,4.27,4.27,0,0,0,6,9c0,.78,0,1,0,3s0,2.22,0,3a4.27,4.27,0,0,0,.26,1.38,2.38,2.38,0,0,0,1.41,1.41A4.27,4.27,0,0,0,9,18.05H9c.78,0,1,0,3,0s2.22,0,3,0a4,4,0,0,0,1.38-.26,2.38,2.38,0,0,0,1.41-1.41A4,4,0,0,0,18.05,15c0-.78,0-1,0-3s0-2.22,0-3A3.78,3.78,0,0,0,17.79,7.62ZM12,15.82A3.81,3.81,0,0,1,8.19,12h0A3.82,3.82,0,1,1,12,15.82Zm4-6.89a.9.9,0,0,1,0-1.79h0a.9.9,0,0,1,0,1.79Z"
                    />
                  </svg>
                </FooterIcon>
              </FooterIconList>
              <FooterIconList>
                <FooterIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#C48B9F"
                      d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"
                    />
                  </svg>
                </FooterIcon>
                <FooterIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#C48B9F"
                      d="M13.78,9.46h0a.38.38,0,0,0-.38.38v1.67L12,9.65a.4.4,0,0,0-.33-.19h0a.38.38,0,0,0-.38.38v2.84a.38.38,0,0,0,.38.38h0a.38.38,0,0,0,.38-.38V11l1.39,1.91,0,0h0a.27.27,0,0,0,.15.11.32.32,0,0,0,.14,0h0A.33.33,0,0,0,14,13l.1-.07h0a.39.39,0,0,0,.11-.27V9.84A.38.38,0,0,0,13.78,9.46ZM9.2,12.27H8.14V9.84a.38.38,0,0,0-.38-.38h0a.38.38,0,0,0-.38.38v2.84a.38.38,0,0,0,.38.38H9.2a.39.39,0,0,0,.39-.38v0A.39.39,0,0,0,9.2,12.27Zm1.11-2.81h0a.39.39,0,0,0-.39.38v2.84a.39.39,0,0,0,.39.38h0a.38.38,0,0,0,.38-.38V9.84A.38.38,0,0,0,10.31,9.46ZM17.91,2H6.09A4.1,4.1,0,0,0,2,6.09V17.91A4.1,4.1,0,0,0,6.09,22H17.91A4.1,4.1,0,0,0,22,17.91V6.09A4.1,4.1,0,0,0,17.91,2Zm.31,12.28a1.55,1.55,0,0,1-.13.17h0a5.5,5.5,0,0,1-.8.8c-2,1.87-5.36,4.11-5.81,3.76s.64-1.76-.53-2a1,1,0,0,1-.25,0h0c-3.44-.48-6-2.89-6-5.78,0-3.25,3.29-5.88,7.34-5.88s7.34,2.63,7.34,5.88A5,5,0,0,1,18.22,14.28ZM16.51,9.47H15a.38.38,0,0,0-.38.38v2.84a.38.38,0,0,0,.38.38h1.48a.38.38,0,0,0,.38-.38v0a.38.38,0,0,0-.38-.38H15.45v-.6h1.06a.39.39,0,0,0,.38-.39v0a.38.38,0,0,0-.38-.38H15.45v-.61h1.06a.38.38,0,0,0,.38-.38v0A.38.38,0,0,0,16.51,9.47Z"
                    />
                  </svg>
                </FooterIcon>
              </FooterIconList>
            </FooterTitle>
            <FooterTitle>
              Contact
              <FooterItem>Address : Taipei, Taiwan</FooterItem>
              <FooterItem>Email : shopping@gmail.com</FooterItem>
              <FooterItem>Phone : 02-86612345</FooterItem>
            </FooterTitle>
          </FooterList>
          <FooterBottom>© 2021 Shopping All rights reserved.</FooterBottom>
        </Footer>
        <ScrollToTop />
      </Container>
      {/* )} */}
    </>
  );
};

export default Cart;
