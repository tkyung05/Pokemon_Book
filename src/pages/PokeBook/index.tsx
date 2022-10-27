import { PokeInfoBlock } from "../../components/PokeInfoBlock";
import { PokeButtonBlock } from "../../components/PokeButtonBlock";
import { Container, PokeBookFrame } from "./style";
import styled from "styled-components";

export function PokeBook() {
  return (
    <ScreenContainer>
      <Container>
        <PokeBookFrame>
          <PokeInfoBlock />
          <PokeButtonBlock />
        </PokeBookFrame>
      </Container>
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  display: flex;
  justify-content: center;
`;
