import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.bookBgColor};
  width: 300px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
`;

export const FindLED = styled.div<{ LEDColor: string }>`
  background-color: ${(props) => props.LEDColor};
  width: 20%;
  padding-bottom: 20%;
  border-radius: 50%;
  outline: solid 5px white;
  margin: 7%;
`;

export const LEDContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 35%;
  display: flex;
`;

export const LED = styled.div<{ LEDColor: string }>`
  background-color: ${(props) => props.LEDColor};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 5px;
`;

export const PokePhoto = styled.div<{ bgColor: string }>`
  position: relative;
  background-color: ${(props) => props.bgColor};
  width: 70%;
  height: 40%;
  margin: 30px auto 0 auto;
  border-radius: 5px 5px 5px 50px;
`;
