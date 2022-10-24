import { PokeInfoBlock } from "../../components/PokeInfoBlock";
import { PokeButtonBlock } from "../../components/PokeButtonBlock";
import { Container, PokeBookFrame } from "./style";

export function PokeBook() {
  return (
    <Container>
      <PokeBookFrame>
        <PokeInfoBlock />
        <PokeButtonBlock />
      </PokeBookFrame>
    </Container>
  );
}
