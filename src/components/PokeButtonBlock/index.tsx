import { useState } from "react";
import { Container, PokeSearchBtn, PokeSearchInput } from "./style";
import { getPokeOne } from "../../APIs/getPokeOne";
import { STATUS_200 } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { usePokeInfo } from "../../hooks/usePokeInfo";

export function PokeButtonBlock() {
  const [searchPoke, setSearchPoke] = useState("");
  const { setPokeInfo } = usePokeInfo();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPoke(e.target.value);
  };
  const onSubmit = async () => {
    const { data, status } = await getPokeOne(searchPoke);

    console.log(data, status);

    if (status === STATUS_200) {
      const newPokeInfo = {
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
      <PokeSearchInput type={"search"} onChange={onChange} />

      <PokeSearchBtn onClick={onSubmit}>
        Poke Poke <FontAwesomeIcon icon={faMagnifyingGlass} />
      </PokeSearchBtn>
    </Container>
  );
}
