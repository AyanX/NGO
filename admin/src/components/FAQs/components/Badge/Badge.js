import './Badge.scss';

const Badge = ({ children, variant = 'default' }) => {
  return (
    <span className={`badge badge--${variant}`}>
      {children}
    </span>
  );
};

export default Badge;
