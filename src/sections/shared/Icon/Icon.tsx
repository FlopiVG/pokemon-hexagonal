import { FC, SVGProps } from 'react';
import * as Icons from './icons';
import IconType from './icons/IconType';

export type IconNames = keyof typeof Icons;
type Sizes = 'sm' | 'md' | 'lg';

interface Props extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconNames;
  size?: Sizes;
}

const sizes: Record<Sizes, number> = {
  sm: 16,
  md: 24,
  lg: 32,
};

const Icon: FC<Props> = ({ name, size = 'md', ...rest }) => {
  const IconComponent = (Icons as unknown as Record<IconNames, IconType>)[name];

  return <IconComponent width={sizes[size]} height={sizes[size]} {...rest} />;
};

export default Icon;
