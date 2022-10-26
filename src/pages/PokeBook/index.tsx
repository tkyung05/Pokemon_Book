import { PokeInfoBlock } from "../../components/PokeInfoBlock";
import { PokeButtonBlock } from "../../components/PokeButtonBlock";
import { Container, PokeBookFrame } from "./style";
import styled from "styled-components";

export function PokeBook() {
  return (
    <C>
      <Container>
        <PokeBookFrame>
          <PokeInfoBlock />
          <PokeButtonBlock />
        </PokeBookFrame>
      </Container>
    </C>
  );
}

const C = styled.div`
  display: flex;
  justify-content: center;
`;
