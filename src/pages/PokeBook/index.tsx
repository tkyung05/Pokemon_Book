import { PokeButtonBlock, PokeInfoBlock } from "../../components/";
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
