import PokemonDetail from './PokemonDetail';

export default interface PokemonRepository {
  getByName: (name: string) => Promise<PokemonDetail>;
}
