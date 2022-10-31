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
import { pokeInfoSelector } from "../../atoms/selectors";

export default function PokeInfoBlock() {
  const pokeInfos = useRecoilValue(pokeInfoSelector);

  return (
    <Container>
      {/* LED 장식들 */}
      <FindLED />
      <LEDContainer>
        <LED LEDColor={LEDColors.redColor} />
        <LED LEDColor={LEDColors.yellowColor} />
        <LED LEDColor={LEDColors.greenColor} />
      </LEDContainer>

      {/* 포켓몬 사진 데이터 */}
      <PokePhotoFrame>
        <PokeInfoNameText>
          No.{pokeInfos.id} {pokeInfos.name}
        </PokeInfoNameText>

        <PokePhoto src={pokeInfos.sprite_front} />
      </PokePhotoFrame>

      {/* 포켓몬 스탯 데이터 */}
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
