import { FC, ButtonHTMLAttributes } from 'react';
import Icon, { IconNames } from './Icon';
import classNames from 'classnames';

type Sizes = 'sm' | 'md' | 'lg';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: IconNames;
  size?: Sizes;
}

const sizesClasses: Record<Sizes, string> = {
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-14 h-14',
};

const ButtonIcon: FC<Props> = ({
  iconName,
  size = 'md',
  className,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        'border rounded-full hover:bg-slate-100 active:bg-slate-200 justify-center items-center flex ',
        sizesClasses[size],
        className,
      )}
      {...rest}
    >
      <Icon size={size} name={iconName} />
    </button>
  );
};

export default ButtonIcon;
