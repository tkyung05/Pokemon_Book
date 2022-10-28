import { PokeInfoBlock } from "../../components/PokeInfoBlock";
import { PokeButtonBlock } from "../../components/PokeButtonBlock";
import { Container, PokeBookFrame, ScreenContainer } from "./style";

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
