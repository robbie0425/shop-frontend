import styled from "styled-components";

export const Search = styled.div`
  background: #ffedff;
  height: 100%;
  width: 100%;
  position: fixed;
  right: -100%;
  z-index: 102;
  display: flex;
  justify-content: center;
  transition: 0.7s;
  /* overflow: auto; */

  &.active {
    right: 0%;
  }
`;

export const SearchBar = styled.div`
  background: #ffffff;
  height: 40px;
  width: 70vw;
  position: absolute;
  top: 10%;
  border-radius: 80px;
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 80px;
  padding-left: 30px;
  padding-right: 30px;
  border-width: 2px;
  border-style: solid;
  border-color: #90caf9;
`;

export const SearchProduct = styled.div`
  background: #ffffff;
  height: 70%;
  width: 60vw;
  position: absolute;
  top: 20%;
  border-radius: 1em;
  display: flex;
  //align-content: space-evenly;
  justify-content: space-evenly;
  flex-wrap: wrap;
  overflow: auto;
`;

export const SearchClose = styled.div`
  width: 50px;
  z-index: 100;
  top: 1rem;
  left: 2rem;
  position: absolute;
  cursor: pointer;

  &:hover {
    stroke: white;
  }
  &.active {
    right: -100%;
  }
`;
