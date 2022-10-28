import styled from "styled-components";
import { detailBgColor, whiteColor, yellowColor } from "./constants";

export const Container = styled.div`
  background-color: ${detailBgColor};
  width: 100%;
  height: 100%;
`;

export const PokePhotoFrame = styled.div`
  margin-top: 5%;
`;

export const PokePhoto = styled.img`
  width: 40%;
  height: auto;
  border: solid 5px gray;
  background-color: ${whiteColor};
  border-radius: 10%;
  margin: 5%;
`;

export const PokeTypesFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokeType = styled.p`
  font-size: 30px;
  margin: 10px;
  color: ${yellowColor};
`;

export const PokePhysicalInfoFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokePhysicalInfo = styled.p`
  font-size: 20px;
  margin: 10px;
  color: ${yellowColor};
`;

export const PokeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 45%;
`;

export const DownBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  font-size: 35px;
  background-color: ${yellowColor};
  color: ${detailBgColor};

  &:hover {
    background-color: ${yellowColor};
    cursor: pointer;
  }
`;

export const NotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  * {
    margin: 10%;
  }
`;

export const NotFoundText = styled.p`
  font-size: 30px;
  color: ${yellowColor};
`;

export const NotFoundImg = styled.img`
  width: 80%;
  height: auto;
`;
