import PokemonDetail from '../domain/PokemonDetail';
import PokemonDetailDto from './PokemonDetailDto';

const pokemonDetailDtoToPokemonDetail = (
  pokemonDetailDto: PokemonDetailDto,
): PokemonDetail => {
  const { name, height, weight, id, types, sprites, abilities } =
    pokemonDetailDto;

  return {
    id,
    name,
    height,
    weight,
    types: types.map(({ type }) => type.name),
    imgUrl: sprites.front_default,
    abilities: abilities.map(({ ability, is_hidden }) => ({
      name: ability.name,
      is_hidden,
    })),
  };
};

export default pokemonDetailDtoToPokemonDetail;
