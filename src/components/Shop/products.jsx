import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  CardIcon,
  CardIconList,
} from "../styled/main";
import Snackbar from "./snackbar";
import axios from "axios";

const Products = (props) => {
  const [show, setShow] = useState(false);
  function snackbarlike() {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
    //alert("click");
  }

  const imgsrc = "http://localhost:8080/productImg/" + props.img;
  //console.log(imgsrc);

  const history = useHistory();
  let pass = parseInt(localStorage.getItem("ID"));

  let id = parseInt(localStorage.getItem("ID"));
  const [wishcart, setWishcart] = useState();

  async function addWish(productId) {
    if (!pass) {
      history.push("/login");
    }
    let item = {
      customerId: id,
      productId: productId,
    };
    const result = await axios.post("/wishlist/check", item);
    //console.log(result.data);
    if (result.data !== 0) {
      alert("已追蹤過了");
      return;
    } else {
      const result2 = await axios.post("/wishlist", item);
      setWishcart("wishlist");
      snackbarlike();
      //console.log(result.data);
      if (result2.data === 0) {
        alert("新增失敗");
        return;
      }
    }
  }

  function addCart(productId) {
    if (!pass) {
      history.push("/login");
    }
    let cartId = JSON.parse(localStorage.getItem("cartId"));
    if (!cartId) {
      return;
    } else {
      if (cartId.includes(productId)) {
        alert("已加入購物車");
        return;
      } else {
        cartId.push(productId);
        localStorage.setItem("cartId", JSON.stringify(cartId));
        setWishcart("cart");
        snackbarlike();
      }
    }
  }

  return (
    <>
      {show && <Snackbar props={wishcart} />}
      <Card>
        <CardImg src={imgsrc}></CardImg>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>NT.{props.price}</CardText>
          <CardIconList>
            <CardIcon onClick={() => addWish(props.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#C48B9F"
                  d="M14,11H13V10a1,1,0,0,0-2,0v1H10a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V13h1a1,1,0,0,0,0-2Zm6.16-6A6.29,6.29,0,0,0,12,4.41a6.27,6.27,0,0,0-8.16,9.48l6,6.05a3,3,0,0,0,4.24,0l6-6.05A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6,6a1,1,0,0,1-1.42,0l-6-6a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.48Z"
                />
              </svg>
            </CardIcon>
            <CardIcon onClick={() => addCart(props.id)}>
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#C48B9F"
                  d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"
                />
              </svg>
            </CardIcon>
          </CardIconList>
        </CardBody>
      </Card>
    </>
  );
};

export default Products;
