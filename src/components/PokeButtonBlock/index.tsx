import {
  Container,
  PokeSearchBtn,
  PokeSearchInput,
  PokeDetailBtn,
  Block,
  BlockList,
} from "./style";
import { useState } from "react";
import { getPokeInfo } from "../../APIs/getPokeInfo";
import { STATUS_200 } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { usePokeInfo } from "../../hooks/usePokeInfo";
import { IPokeInfo } from "../../interfaces";
import { DetailPokeInfo } from "../../components";

export default function PokeButtonBlock() {
  const [detailBtn, setDetailBtn] = useState<boolean>(false);
  const [searchPoke, setSearchPoke] = useState<string>("");
  const { setPokeInfo } = usePokeInfo();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPoke(e.target.value);
  };
  const onSubmit = async () => {
    const { data, status } = await getPokeInfo(searchPoke);

    if (status === STATUS_200) {
      const newPokeInfo: IPokeInfo = {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        types: data.types,
        sprite_front: data.sprites.front_default,
        sprite_back: data.sprites.back_default,
        stats: data.stats.slice(0, 3),
      };
      setPokeInfo(newPokeInfo);
    } else {
      console.log(status, data);
    }
  };

  return (
    <Container>
      {/* 상세 페이지 띄우기 or 기본 페이지 */}
      {detailBtn ? (
        <DetailPokeInfo setDownBtn={setDetailBtn} />
      ) : (
        <>
          <PokeSearchInput
            type={"search"}
            onChange={onChange}
            placeholder={"Find Pokemon"}
            spellCheck={false}
          />

          <PokeSearchBtn onClick={onSubmit}>
            Poke Poke <FontAwesomeIcon icon={faMagnifyingGlass} />
          </PokeSearchBtn>

          <PokeDetailBtn onClick={() => setDetailBtn(true)} />

          <BlockList>
            <Block />
            <Block />
          </BlockList>
        </>
      )}
    </Container>
  );
}
