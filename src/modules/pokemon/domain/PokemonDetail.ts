export default interface PokemonDetail {
  id: number;
  name: string;
  types: string[];
  imgUrl: string;
  height: number;
  weight: number;
  abilities: {
    name: string;
    is_hidden: boolean;
  }[];
}
