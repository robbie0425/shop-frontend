import styled from "styled-components";

export const Footer = styled.div`
  background: #f7bacf;
  bottom: 0%;
  position: relative;
  height: 150px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const FooterBottom = styled.div`
  background: #c38a9e;
  flex: 0;
`;

export const FooterList = styled.div`
  background: #f7bacf;
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

export const FooterTitle = styled.div`
  background: #f7bacf;
  flex: 1;
  color: black;
  font-weight: bold;
  font-size: 18px;
`;

export const FooterItem = styled.div`
  background: #f7bacf;
  color: #c38a9e;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const FooterIconList = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const FooterIcon = styled.div`
  height: 30px;
  width: 30px;
  cursor: pointer;

  &:hover {
    stroke: white;
  }
`;
