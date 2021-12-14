import inputStyles from "../InputComponent.module.css";

/**
 * 
 * @param {String} value The current value of the input
 * @param {maxLength} maxLength The max length of the input
 * @param {Function} onChangeHandler The function to call when the input changes 
 * @param {String} placeholder The placeholder text to display in the input
 * @returns 
 */
const TextAreaInput = ({
  value,
  maxLength = 300,
  onChangeHandler,
  placeholder = "Type here...",
}) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      className={`${inputStyles.container} ${inputStyles.textareaInput}`}
      onChange={onChangeHandler}
    ></textarea>
  );
};

export default TextAreaInput;
