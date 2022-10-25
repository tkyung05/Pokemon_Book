import { useState } from "react";
import { Container } from "./style";
import { getPokeOne } from "../../APIs/getPokeOne";

export function PokeButtonBlock() {
  const [searchPoke, setSearchPoke] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPoke(e.target.value);
  };
  const onSubmit = async () => {
    const { data, status } = await getPokeOne(searchPoke);

    if (status === 200) {
      const newPokeInfo = {
        id: data.id,
        name: data.name,
        sprite: data.sprites.front_default,
        stats: data.stats.slice(0, 3),
        types: data.types,
      };
    }
  };

  return (
    <Container>
      <input type={"search"} onChange={onChange} />
      <button onClick={onSubmit}>search</button>
    </Container>
  );
}
