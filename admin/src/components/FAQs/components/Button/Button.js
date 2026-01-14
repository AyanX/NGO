import './Button.scss';

const Button = ({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
  icon = null
}) => {
  const classNames = [
    'button',
    `button--${variant}`,
    fullWidth ? 'button--full-width' : ''
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="button__icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
