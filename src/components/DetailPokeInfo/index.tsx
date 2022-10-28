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
import { pokeInfoAtom } from "../../atom";
import { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export function DetailPokeInfo({
  setDownBtn,
}: {
  setDownBtn: Dispatch<SetStateAction<boolean>>;
}) {
  const pokeInfos = useRecoilValue(pokeInfoAtom);

  return (
    <Container>
      <DownBtn onClick={() => setDownBtn(false)}>
        <FontAwesomeIcon icon={faCaretDown} />
      </DownBtn>

      {pokeInfos.id === 0 ? (
        <NotFoundPage>
          <NotFoundText>Not foud!</NotFoundText>
          <NotFoundImg src="img/notFoundImg.jpeg" />
        </NotFoundPage>
      ) : (
        <>
          <PokePhotoFrame>
            <PokePhoto src={pokeInfos.sprite_front} />
            <PokePhoto src={pokeInfos.sprite_back} />
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
