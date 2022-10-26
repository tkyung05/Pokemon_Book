import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 800px) {
    height: 180vh;
  }
`;

export const PokeBookFrame = styled.div`
  display: flex;
  align-items: flex-end;

  & > div {
    margin: 20px;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;

    & > div {
      width: 250px;
    }
  }
`;
