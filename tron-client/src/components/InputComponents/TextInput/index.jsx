import inputStyles from "../InputComponent.module.css";

const TextInput = ({
  value,
  isDisabled=false,
  maxLength=128,
  onChangeHandler,
  placeholder = "Type here...",
}) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      disabled={isDisabled}
      maxLength={maxLength}
      className={`${inputStyles.container}`}
      onChange={onChangeHandler}
    ></input>
  );
};

export default TextInput;
