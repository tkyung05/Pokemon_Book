import { Container, FindLED, LED, LEDContainer, PokePhoto } from "./style";
import { FindLEDColor, LEDColors, whiteColor } from "./constants";

export function PokeInfoBlock() {
  return (
    <Container>
      <FindLED LEDColor={FindLEDColor} />
      <LEDContainer>
        <LED LEDColor={LEDColors.redColor} />
        <LED LEDColor={LEDColors.yellowColor} />
        <LED LEDColor={LEDColors.greenColor} />
      </LEDContainer>

      <PokePhoto bgColor={whiteColor}></PokePhoto>
    </Container>
  );
}
