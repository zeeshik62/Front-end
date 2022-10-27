const InputField = ({
  handleChange,
  errors,
  touched,
  className,
  labelName,
  placeholder,
  type,
  name,
  asterisk,
}) => {
  return (
    <div className={className} data-validate='Please Type Your Name'>
      <span className='label-input100'>
        {labelName} {asterisk && "*"}
      </span>
      <input className='input100' type={type} name={name} onChange={handleChange} placeholder={placeholder} />
      <p style={{ color: "red" }}>{errors && touched && errors}</p>
    </div>
  );
};

export default InputField;
