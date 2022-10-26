import {
  PokeSearchBtnColor,
  outlineColor,
  PokeSearchBtnHoverColor,
} from "./constants";
import styled from "styled-components";
import { whiteColor } from "../PokeInfoBlock/constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bookBgColor};
  width: 270px;
  height: 400px;
  outline: solid 7px ${outlineColor};
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
  border-radius: 5px;
  font-size: 30px;
  margin: 10%;
  padding-left: 20px;
  padding-right: 20px;
`;

export const PokeSearchBtn = styled.button`
  width: 80%;
  height: 10%;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  background-color: ${PokeSearchBtnColor};
  color: ${whiteColor};
  transition: 0.5s;

  &:hover {
    background-color: ${PokeSearchBtnHoverColor};
    color: ${whiteColor};
  }
`;
