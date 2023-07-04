import * as React from "react";
import { fetchPokemon } from "./redux/PokemonAction";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

const Pokemon = () => {
  // const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  const { data, isLoading, errorMessage } = useAppSelector(
    (state) => state.pokemon
  );
  // console.log("data",data)
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchPokemon("bulbasaur"));
    console.log("inside useEffect");
  }, [dispatch]);

  return (
    <div className="App">
      {errorMessage ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data?.id}</h3>
          <h3>{data?.name}</h3>
          <h3>{data?.height}</h3>
        </>
      ) : null}
    </div>
  );
};

export default Pokemon;
