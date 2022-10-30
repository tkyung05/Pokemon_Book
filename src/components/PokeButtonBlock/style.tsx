import {
  PokeSearchBtnColor,
  outlineColor,
  PokeSearchBtnHoverColor,
  whiteColor,
  SearchInputBgColor,
  yellowColor,
  deepYellowColor,
} from "./constants";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bookBgColor};
  width: 300px;
  height: 400px;
  border: solid 7px ${outlineColor};
  border-radius: 10px;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
  transition: 0.5s;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const PokeSearchInput = styled.input`
  width: 80%;
  height: 15%;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 20px;
  margin: 10%;
  padding-left: 20px;
  padding-right: 20px;
  color: ${yellowColor};
  background-color: ${SearchInputBgColor};
`;

export const PokeSearchBtn = styled.button`
  width: 80%;
  height: 10%;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  background-color: ${PokeSearchBtnColor};
  color: ${whiteColor};
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    background-color: ${PokeSearchBtnHoverColor};
  }
`;

export const PokeDetailBtn = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid 10px ${deepYellowColor};
  margin: 12.5%;
  cursor: pointer;

  animation-duration: 1s;
  animation-name: bgColorAnim;
  animation-iteration-count: infinite;

  @keyframes bgColorAnim {
    0% {
      background-color: #fffa65;
    }
    100% {
      background-color: #ffdd59;
    }
  }
`;

export const Block = styled.div`
  background-color: #2f3542;
  width: 40%;
  height: 40px;
  border-radius: 5px;
`;

export const BlockList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;
