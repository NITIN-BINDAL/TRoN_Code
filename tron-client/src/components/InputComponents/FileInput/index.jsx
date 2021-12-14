import inputStyles from "../InputComponent.module.css";

const FileInput = ({ onChangeHandler }) => {
  return (
    <input
      onChange={onChangeHandler}
      type="file"
      accept="audio/wav, audio/mp3, audio/flac"
      className={`${inputStyles.container}`}
    ></input>
  );
};

export default FileInput;
