import IconType from './IconType';

const GridIcon: IconType = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <rect width="7" height="7" x="3" y="3" rx="1"></rect>
      <rect width="7" height="7" x="14" y="3" rx="1"></rect>
      <rect width="7" height="7" x="14" y="14" rx="1"></rect>
      <rect width="7" height="7" x="3" y="14" rx="1"></rect>
    </svg>
  );
};

export default GridIcon;
