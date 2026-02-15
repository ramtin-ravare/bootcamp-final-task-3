function RHFSelect({
  register,
  placeholder,
  required,
  label,
  name,
  errors,
  options = [],
  containerClassName = "",
  selectClassName = "",
  validationSchema,
  defaultValue = "",
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
        {...register(name, validationSchema)}
        id={name}
        defaultValue={defaultValue}
      >
        {placeholder && (
          <option
            className="cursor-pointer text-secondary-400 bg-secondary-200"
            value=""
            disabled
          >
            {placeholder}
          </option>
        )}
        {options.map(({ value, label }) => (
          <option
            className="cursor-pointer text-secondary-500 bg-secondary-200"
            key={value}
            value={value}
          >
            {label}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <span className="text-error text-sm my-2">{errors[name]?.message}</span>
      )}
    </div>
  );
}

export default RHFSelect;
