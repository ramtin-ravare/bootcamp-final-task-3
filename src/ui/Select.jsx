function Select({
  placeholder,
  required,
  label,
  name,
  onChange,
  value,
  options = [],
  containerClassName = "",
  selectClassName = "",
}) {
  return (
    <div className={containerClassName}>
      {label && (
        <label className="my-2 block text-secondary-500" htmlFor={name}>
          {label} {required && <span className="text-error">*</span>}
        </label>
      )}
      <select
        className={`textField__input cursor-pointer border-transparent border-r-14 border-r-transparent outline outline-secondary-400 focus:outline-3 focus:outline-primary-800 ${selectClassName}`}
        id={name}
        required={required}
        value={value}
        onChange={onChange}
      >
        {placeholder && (
          <option
            className="text-secondary-400 bg-secondary-200"
            disabled
            value=""
          >
            {placeholder}
          </option>
        )}
        {options.map(({ value, label }) => (
          <option
            className="text-secondary-500 bg-secondary-200"
            key={value}
            value={value}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
