import { useState } from "react";
import styles from "./Dialogue.module.css";

// helpers
import { handleCaptionDisplay } from "../../../helpers/misc";
import { SERVER_BASE_URL } from "../../../config/api";

const Dialogue = ({ actorName, text, audioUrl }) => {
  const [captions, setCaptions] = useState(text.split(" "));
  const [curSpokenWordIdx, setCurSpokenWordIdx] = useState(-1);

  const handleCaptions = () => {
    handleCaptionDisplay(captions, setCurSpokenWordIdx);
  };

  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <h3 className={styles.name}>{actorName}</h3>
        <audio
          src={`${SERVER_BASE_URL}saved/${audioUrl}`}
          type="audio/wav"
          controls
          onPlay={handleCaptions}
        >
          <p>
            Your browser doesn't support HTML5 audio. Here is a{" "}
            <a href={`${SERVER_BASE_URL}saved/${audioUrl}`}>
              link to the audio
            </a>{" "}
            instead.
          </p>
        </audio>
      </div>

      <div className={styles.audioContainer}>
        <div className={styles.captionContainer}>
          {captions.map((word, wordIdx) => {
            if (wordIdx === curSpokenWordIdx) {
              return <span className={styles.spokenWord}>{word} </span>;
            } else {
              return <span>{word} </span>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Dialogue;
