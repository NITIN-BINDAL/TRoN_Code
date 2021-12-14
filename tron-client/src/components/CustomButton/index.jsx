import styles from "./CustomButton.module.css";

/*
Types of Button

1. primary : This button corresponds to main actions such as submission, activation, generation etc
2. secondary : This button corresponds to secondary actions which are less frequently used such as delete, clear etc
3. tertiary : button for cancellation, deletion, etc
*/

/**
 * 
 * @param {String} text The text to display in the button
 * @param {String} type The type of button to be displayed
 * @param {Function} onClickHandler The function to be called when the button is clicked
 * @param {Boolean} isDisabled Whether the button is disabled or not
 * @param {Object} customStyle The custom style to be applied to the button
 * @returns 
 */

const CustomButton = ({
  text,
  type = "primary",
  onClickHandler = () => {},
  isDisabled = false,
  customStyle
}) => {
  return (
    <button
      style={customStyle}
      disabled={isDisabled}
      className={`${styles.button} ${styles[type]}`}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default CustomButton;
