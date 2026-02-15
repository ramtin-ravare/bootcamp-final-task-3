function TextField({
  type = "text",
  name,
  label,
  onChange,
  value,
  required,
  className = "",
  placeholder = "",
  containerClassName = "",
}) {
  return (
    <div className={containerClassName}>
      {label && (
        <label htmlFor={name} className="text-secondary-500 block mb-1">
          {label} {required && <span className="text-error">*</span>}
        </label>
      )}
      {type === "textarea" && (
        <textarea
          id={name}
          type={type}
          className={`textField__input w-full ${className}`}
          autoComplete="off"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        ></textarea>
      )}
      {type !== "textarea" && (
        <input
          id={name}
          type={type}
          className={`textField__input ${className}`}
          autoComplete="off"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required={required}
        />
      )}
    </div>
  );
}

export default TextField;
