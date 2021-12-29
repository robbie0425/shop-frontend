import styled from "styled-components";
import NewImg from "../../pic/new.png";
import LipstickImg from "../../pic/lipstick.png";
import PerfumeImg from "../../pic/perfume.jpeg";
import MaskImg from "../../pic/mask.jpeg";
import CartImg from "../../pic/cart2.jpeg";

export const Main = styled.div`
  background: #ffeeff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const New = styled.div`
  background: url(${NewImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 150px;
  width: 100vw;
  display: flex;
  align-items: center;
`;

export const Lipsticks = styled.div`
  background: url(${LipstickImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 150px;
  width: 100vw;
  display: flex;
  align-items: center;
`;

export const Perfumes = styled.div`
  background: url(${PerfumeImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 150px;
  width: 100vw;
  display: flex;
  align-items: center;
  opacity: 0.7;
`;

export const Masks = styled.div`
  background: url(${MaskImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 150px;
  width: 100vw;
  display: flex;
  align-items: center;
  opacity: 0.5;
`;

export const Carts = styled.div`
  background: url(${CartImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 150px;
  width: 100vw;
  display: flex;
  align-items: center;
  opacity: 0.8;
`;

export const NewTitle = styled.div`
  height: 50px;
  width: 100px;
  color: white;
  font-size: 40px;
  font-weight: bold;
  flex: 1;
  text-align: center;
`;

export const CardList = styled.div`
  height: auto;
  width: 100vw;
  padding: 50px;
  display: flex;
  align-content: space-evenly;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  margin: 30px;
  //height: 300px;
  //width: 300px;
`;

export const CardImg = styled.img`
  height: 300px;
  width: 300px;
`;

export const CardBody = styled.div`
  position: relative;
  background: #f8bbd0;
  height: 100px;
`;

export const CardTitle = styled.div``;

export const CardText = styled.div`
  //background-color: blue;
`;

export const CardIconList = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px;
  height: 30px;
`;

export const CardIcon = styled.svg`
  height: 30px;
  width: 30px;
  cursor: pointer;

  &:hover {
    stroke: white;
  }
`;

export const SnackbarLike = styled.div`
  background: #85ffbd;
  position: fixed;
  left: 15px;
  bottom: 15px;
  height: 50px;
  width: 300px;
  border-radius: 10px;
  z-index: 10;
  padding: 10px;
  animation: fadein 1s, fadeout 1s 2.5s;

  @keyframes fadein {
    from {
      opacity: 0;
      left: -10%;
    }
    to {
      opacity: 1;
      left: 15px;
    }
  }
  @keyframes fadeout {
    from {
      opacity: 1;
      bottom: 15px;
    }
    to {
      opacity: 0;
      bottom: -10%;
    }
  }
`;

export const SnackbarText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: black;
  height: 30px;
  text-align: center;
`;

export const CartContainer = styled.div`
  width: 70%;
  height: auto;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 10px 20px #90caf9;
  margin: 50px;
`;

export const CartHeader = styled.div`
  margin: auto;
  margin-top: 5%;
  width: 90%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: black;
`;

export const RemoveAll = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: red;
  cursor: pointer;
  border-bottom: 1px solid red;
`;

export const CartItem = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const ProductImg = styled.img`
  width: auto;
`;

export const CartAbout = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const ProductName = styled.div`
  //line-height: 10px;
  font-size: 32px;
  font-weight: 800;
  color: black;
`;

export const ProductInfo = styled.div`
  //line-height: 10px;
  font-size: 18px;
  font-weight: 600;
  color: gray;
`;

export const CartCounter = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Plus = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #d3d1d1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
`;

export const Count = styled.div`
  font-size: 20px;
  font-weight: 900;
  color: black;
`;

export const Minus = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #d3d1d1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
`;

export const CartPrice = styled.div`
  width: 100px;
  text-align: right;
`;

export const Amount = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: gray;
`;

export const Total = styled.div`
  font-size: 26px;
  font-weight: 800;
  color: black;
`;

export const Remove = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: red;
  cursor: pointer;
`;

export const CartLine = styled.div`
  width: 50%;
  float: right;
  margin: 5%;
  border-top: 1px solid gray;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

export const CartTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CartItemCount = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #909090;
  line-height: 10px;
`;

export const CartTotalPrice = styled.div`
  font-size: 36px;
  font-weight: 900;
  color: black;
`;

export const Checkout = styled.button`
  margin-top: 5%;
  margin-right: 5%;
  width: 100%;
  height: 40px;
  border: none;
  background: linear-gradient(to bottom right, #bed9fc, #90caf9);
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: black;
`;

export const SurplusText = styled.div`
  font-size: 20px;
  font-weight: 900;
  color: gray;
`;

export const ProductSurplus = styled.div`
  font-size: 25px;
  font-weight: 900;
  color: black;
`;

export const WishRemove = styled.svg`
  height: 100px;
  width: 100px;
  cursor: pointer;

  &:hover {
    stroke: white;
  }
`;

export const ChangeInput = styled.input`
  height: 30px;
  width: 100%;
  border-radius: 80px;
  padding-left: 30px;
  padding-right: 30px;
  border-width: 2px;
  border-style: solid;
  border-color: #90caf9;
`;

export const ChangeButton = styled.button`
  height: 50px;
  width: 70%;
  border-radius: 80px;
  padding-left: 30px;
  padding-right: 30px;
  border-width: 2px;
  border-style: solid;
  border-color: #90caf9;

  &:hover {
    box-shadow: 0 0 15px green;
  }
`;
