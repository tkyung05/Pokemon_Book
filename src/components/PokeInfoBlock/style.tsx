import styled from "styled-components";
import {
  FindLEDColor,
  PhotoFrameBgColor,
  PhotoFrameOutlineColor,
  whiteColor,
  PokeInfoBoxColor,
  ProgressBgColor,
  ProgressBarColor,
  yellowColor,
  outlineColor,
} from "./constants";

export const Container = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.bookBgColor};
  width: 300px;
  height: 500px;
  outline: solid 7px ${outlineColor};
  border-radius: 10px;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
  transition: 0.5s;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const FindLED = styled.div`
  background-color: ${FindLEDColor};
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

export const PokePhotoFrame = styled.div`
  position: relative;
  background-color: ${PhotoFrameBgColor};
  width: 70%;
  height: 40%;
  margin: 30px auto 0 auto;
  border: solid 15px ${PhotoFrameOutlineColor};
  border-radius: 5px 5px 5px 50px;
  display: flex;
  justify-content: center;
`;

export const PokePhoto = styled.img`
  position: absolute;
  width: 100%;
  height: auto;

  animation-duration: 1s;
  animation-name: idle;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @keyframes idle {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const PokeInfoNameText = styled.p`
  position: absolute;
  top: 5%;
  color: ${whiteColor};
  font-size: 16px;
  z-index: 1;
`;

export const PokeInfoBox = styled.div`
  background-color: ${PokeInfoBoxColor};
  border-radius: 10px;
  width: 70%;
  height: 30%;
  margin: 7% auto 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PokeInfoProgress = styled.progress`
  height: 7px;
  width: 85%;
  margin: 5px;

  &::-webkit-progress-bar {
    background: ${ProgressBgColor};
    border-radius: 10px;
  }
  &::-webkit-progress-value {
    border-radius: 10px;
    background-color: ${ProgressBarColor};
  }
`;

export const PokeInfoStatKind = styled.p`
  font-size: 15px;
  color: ${yellowColor};
  margin: 5px;
`;

export const PokeInfoStatBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
