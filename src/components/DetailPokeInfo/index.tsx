import {
  Container,
  PokePhoto,
  PokePhotoFrame,
  PokeType,
  PokeTypesFrame,
  PokePhysicalInfoFrame,
  PokePhysicalInfo,
  PokeInfoContainer,
  DownBtn,
  NotFoundPage,
  NotFoundText,
  NotFoundImg,
} from "./style";
import { useRecoilValue } from "recoil";
import { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { PUBLIC_URL } from "../../constants";
import { notFoundImg } from "./constants";
import { pokeInfoSelector } from "../../atoms/selectors";

export default function DetailPokeInfo({
  setDownBtn,
}: {
  setDownBtn: Dispatch<SetStateAction<boolean>>;
}) {
  const pokeInfos = useRecoilValue(pokeInfoSelector);

  return (
    <Container>
      {/* 상세 페이지 on off 버튼 */}
      <DownBtn onClick={() => setDownBtn(false)}>
        <FontAwesomeIcon icon={faCaretDown} />
      </DownBtn>

      {/* 포켓몬 데이터 유무 판단 */}
      {pokeInfos.id === 0 ? (
        <NotFoundPage>
          <NotFoundText>Not found!</NotFoundText>
          <NotFoundImg src={PUBLIC_URL + notFoundImg} />
        </NotFoundPage>
      ) : (
        <>
          <PokePhotoFrame>
            <PokePhoto src={pokeInfos.sprite_front} />
            <PokePhoto
              src={
                pokeInfos.sprite_back === null
                  ? pokeInfos.sprite_front
                  : pokeInfos.sprite_back
              }
            />
          </PokePhotoFrame>

          <PokeInfoContainer>
            <PokeTypesFrame>
              {pokeInfos.types.map((types, idx) => (
                <PokeType key={idx}>{types.type.name}</PokeType>
              ))}
            </PokeTypesFrame>

            <PokePhysicalInfoFrame>
              <PokePhysicalInfo>height: {pokeInfos.height}</PokePhysicalInfo>
              <PokePhysicalInfo>weight: {pokeInfos.weight}</PokePhysicalInfo>
            </PokePhysicalInfoFrame>
          </PokeInfoContainer>
        </>
      )}
    </Container>
  );
}
