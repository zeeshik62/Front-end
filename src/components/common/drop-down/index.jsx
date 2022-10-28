import Select from "react-select";

const Dropdown = ({
  asterisk,
  dName,
  name,
  disable,
  handleChange,
  multiSelect,
  options,
  selectedOption,
  title,
}) => {
  return (
    <div className='wrap-input100 border-0 bg1'>
      {/* for shorter width rs1-wrap-input100 */}
      <p className='label-input100 my-1'>
        {title}
        <span className='ml-1'>{asterisk && "*"}</span>
      </p>
      <Select
        className='basic-multi-select mt-3'
        classNamePrefix='select'
        isDisabled={disable}
        isMulti={multiSelect ? true : false}
        name={name}
        options={options}
        onChange={(selectedOption) => handleChange(selectedOption.value)}
        value={selectedOption}
      />
    </div>
  );
};

export default Dropdown;
