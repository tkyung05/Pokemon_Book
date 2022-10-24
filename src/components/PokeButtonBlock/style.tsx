import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.bookBgColor};
  width: 270px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
`;
