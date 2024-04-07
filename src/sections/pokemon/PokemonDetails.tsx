import { useEffect, useState } from 'react';
import Card from '../shared/Card';
import Typography from '../shared/Typography';
import PokemonDetail from '../../modules/pokemon/domain/PokemonDetail';
import ApiPokemonRepository from '../../modules/pokemon/infrastructure/ApiPokemonRepository';

const PokemonDetails = () => {
  const [data, setData] = useState<PokemonDetail>();
  useEffect(() => {
    ApiPokemonRepository.getByName('2').then(setData);
  }, []);

  if (!data) return null;

  return (
    <Card className="flex gap-8">
      <div className="flex gap-4 items-center w-1/2">
        <img
          src={data.imgUrl}
          alt={data.name}
          className="rounded-xl w-24 h-24"
        />
        <div className="flex flex-col gap-2">
          <Typography variant="subtitle">{data.name}</Typography>
          <div className="flex gap-2">
            {data.types.map((type) => (
              <Typography
                key={type}
                as="span"
                variant="caption"
                className="bg-slate-800 text-white rounded-md p-1"
              >
                {type}
              </Typography>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-1/2">
        <div className="flex justify-between">
          <Typography variant="body">Height</Typography>
          <Typography variant="subtitle">{data.height}m</Typography>
        </div>
        <div className="flex justify-between">
          <Typography variant="body">Weight</Typography>
          <Typography variant="subtitle">{data.weight}kg</Typography>
        </div>
        <div className="flex justify-between">
          <Typography variant="body">Abilities</Typography>
          <div>
            {data.abilities.map(({ name, is_hidden }) => (
              <Typography key={name} variant="body">
                {name}
                {is_hidden ? ' (Hidden Ability)' : ''}
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PokemonDetails;
