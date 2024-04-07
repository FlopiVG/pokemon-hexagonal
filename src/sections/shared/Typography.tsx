import classNames from 'classnames';
import { FC, PropsWithChildren, ElementType } from 'react';

type Variant = 'title' | 'subtitle' | 'body' | 'caption';

interface Props extends PropsWithChildren {
  variant: Variant;
  as?: ElementType;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  title: 'text-2xl font-semibold',
  subtitle: 'text-lg font-medium',
  body: 'text-base',
  caption: 'text-sm font-light',
};

const Typography: FC<Props> = ({
  variant,
  children,
  as: Element = 'div',
  className,
}) => {
  return (
    <Element className={classNames(variantClasses[variant], className)}>
      {children}
    </Element>
  );
};

export default Typography;
