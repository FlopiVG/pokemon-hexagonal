import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';

type Variant = 'primary' | 'secondary';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-slate-800 text-slate-200 hover:bg-slate-700 active:bg-slate-600',
  secondary: 'bg-white text-slate-800 hover:bg-slate-100 active:bg-slate-200',
};

const Button: FC<Props> = ({
  variant = 'primary',
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        'px-2 py-1 w-full border rounded-md font-semibold border-slate-800',
        variantClasses[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
