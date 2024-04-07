import { FC, PropsWithChildren } from 'react';
import Icon, { IconNames } from './Icon';
import Typography from './Typography';
import classNames from 'classnames';

interface Props extends PropsWithChildren {
  iconName: IconNames;
  active?: boolean;
}

const NavItem: FC<Props> = ({ iconName, active = false, children }) => {
  return (
    <li
      role="button"
      className={classNames(
        'flex gap-1 items-center px-3 py-2 text-slate-800 hover:text-slate-700 active:text-slate-600',
        { 'bg-slate-200': active },
      )}
    >
      <Icon size="sm" name={iconName} />
      <Typography variant="body">{children}</Typography>
    </li>
  );
};

export default NavItem;
