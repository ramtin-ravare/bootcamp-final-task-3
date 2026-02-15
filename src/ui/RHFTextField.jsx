function RHFTextField({
  type = "text",
  name,
  label,
  register,
  required,
  validationSchema,
  errors,
  className = "",
  placeholder = "",
  defaultValue = "",
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
          defaultValue={defaultValue}
          {...register(name, validationSchema)}
        ></textarea>
      )}
      {type !== "textarea" && (
        <input
          id={name}
          type={type}
          className={`textField__input ${className}`}
          autoComplete="off"
          placeholder={placeholder}
          defaultValue={defaultValue}
          {...register(name, validationSchema)}
        />
      )}
      {errors && errors[name] && (
        <span className="text-error text-sm block my-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RHFTextField;
