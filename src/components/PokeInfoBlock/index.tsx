import {
  Container,
  FindLED,
  LED,
  LEDContainer,
  PokePhotoFrame,
  PokePhoto,
  PokeInfoBox,
  PokeInfoNameText,
  PokeInfoProgress,
  PokeInfoStatKind,
  PokeInfoStatBox,
} from "./style";
import { LEDColors } from "./constants";
import { useRecoilValue } from "recoil";
import { previewPokeInfo } from "../../atom";

export function PokeInfoBlock() {
  const pokeInfos = useRecoilValue(previewPokeInfo);

  return (
    <Container>
      <FindLED />
      <LEDContainer>
        <LED LEDColor={LEDColors.redColor} />
        <LED LEDColor={LEDColors.yellowColor} />
        <LED LEDColor={LEDColors.greenColor} />
      </LEDContainer>

      <PokePhotoFrame>
        <PokeInfoNameText>
          No.{pokeInfos.id} {pokeInfos.name}
        </PokeInfoNameText>

        <PokePhoto src={pokeInfos.sprite} />
      </PokePhotoFrame>

      <PokeInfoBox>
        {pokeInfos.stats.map((stat, idx) => (
          <PokeInfoStatBox key={idx}>
            <PokeInfoStatKind>
              {stat.stat.name} : {stat.base_stat}
            </PokeInfoStatKind>
            <PokeInfoProgress max={300} value={stat.base_stat} />
          </PokeInfoStatBox>
        ))}
      </PokeInfoBox>
    </Container>
  );
}
