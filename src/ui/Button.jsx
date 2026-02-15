const btnTypes = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  danger: "btn--danger",
  success: "btn--success",
};

function Button({
  variant = "primary",
  children,
  className = "",
  onClick,
  type = "button",
  ...rest
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${btnTypes[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
