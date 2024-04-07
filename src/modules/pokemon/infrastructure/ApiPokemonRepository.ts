import PokemonDetail from '../domain/PokemonDetail';
import PokemonRepository from '../domain/PokemonRepository';
import pokemonDetailDtoToPokemonDetail from './pokemonDetailDtoToPokemonDetail';

const getByName = async (name: string): Promise<PokemonDetail> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await res.json();

  return pokemonDetailDtoToPokemonDetail(data);
};

export default {
  getByName,
} as PokemonRepository;
