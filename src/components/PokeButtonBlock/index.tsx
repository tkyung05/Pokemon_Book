import { useState } from "react";
import { getPokeOne } from "../../APIs/getPokeOne";
import { STATUS_200 } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { usePokeInfo } from "../../hooks/usePokeInfo";
import {
  Container,
  PokeSearchBtn,
  PokeSearchInput,
  PokeDetailBtn,
  Block,
  BlockList,
} from "./style";
import { IPokeInfo } from "../../interfaces";

export function PokeButtonBlock() {
  const [searchPoke, setSearchPoke] = useState<string>("");
  const { setPokeInfo } = usePokeInfo();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPoke(e.target.value);
  };
  const onSubmit = async () => {
    const { data, status } = await getPokeOne(searchPoke);

    if (status === STATUS_200) {
      const newPokeInfo: IPokeInfo = {
        id: data.id,
        name: data.name,
        sprite: data.sprites.front_default,
        stats: data.stats.slice(0, 3),
      };
      setPokeInfo(newPokeInfo);
    }
  };

  return (
    <Container>
      <PokeSearchInput
        type={"search"}
        onChange={onChange}
        placeholder={"Find Pokemon"}
        spellCheck={false}
      />

      <PokeSearchBtn onClick={onSubmit}>
        Poke Poke <FontAwesomeIcon icon={faMagnifyingGlass} />
      </PokeSearchBtn>

      <PokeDetailBtn />

      <BlockList>
        <Block />
        <Block />
      </BlockList>
    </Container>
  );
}
