import inputStyles from "../InputComponent.module.css";

const CustomSelect = ({
  value,
  options,
  isMultiSelect = false,
  onChangeHandler,
}) => {
  return (
    <select
      value={value}
      onChange={onChangeHandler}
      className={`${inputStyles.container}`}
    >
      {options.map((option, optionIdx) => (
        <option key={optionIdx} value={option}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
