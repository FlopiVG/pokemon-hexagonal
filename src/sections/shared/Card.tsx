import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
}

const Card: FC<Props> = ({ className, children }) => {
  return (
    <div className={classNames('border rounded-lg p-6 bg-white', className)}>
      {children}
    </div>
  );
};

export default Card;
