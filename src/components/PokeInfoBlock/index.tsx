import {
  Container,
  FindLED,
  LED,
  LEDContainer,
  PokePhotoFrame,
  PokePhoto,
} from "./style";
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

      <PokePhotoFrame bgColor={whiteColor}>
        {/* <PokePhoto src={} /> */}
      </PokePhotoFrame>
    </Container>
  );
}
