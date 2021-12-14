import { useState } from "react";
import styles from "./CloneVoice.module.css";

// constants
import { pageTitles } from "../../constants/appConstants";
import { SERVER_BASE_URL } from "../../config/api";
import { testPrompts } from "../../constants/speakerAudioGenerator";

// helpers
import {
  openNotification,
  notificationTypes,
} from "../../helpers/notifications";
import { handleCaptionDisplay } from "../../helpers/misc";

// API
import { cloneVoice, uploadFile } from "../../api/requests";

// components
import PageTitle from "../../components/PageTitle";
import CustomButton from "../../components/CustomButton";
import InputLabel from "../../components/InputComponents/InputLabel";
import FileInput from "../../components/InputComponents/FileInput";
import TextAreaInput from "../../components/InputComponents/TextAreaInput";

const btnStates = {
  generate: "Generate",
  generating: "Generating...",
};

const CloneVoicePage = () => {
  const [prompt, setTextPrompt] = useState("");
  const [audioFile, setAudioFile] = useState(null);
  const [audioData, setAudioData] = useState(null);
  const [generateBtnState, setGenerateBtnState] = useState("Generate");

  // Captions
  const [captions, setCaptions] = useState([]);
  const [curSpokenWordIdx, setCurSpokenWordIdx] = useState(-1);

  const handleGenerate = () => {
    if (audioFile === null) {
      openNotification(
        notificationTypes.error,
        "Error",
        "No audio file was selected!!!"
      );
      return;
    }

    if (prompt === "") {
      openNotification(
        notificationTypes.error,
        "Error",
        "No text prompt was entered!!!"
      );
      return;
    }

    // Setting state to uploading
    setGenerateBtnState("Uploading Audio File...");

    // Create an object of formData
    const fileData = new FormData();

    // Update the formData object
    fileData.append("file", audioFile);

    // Uploading file
    uploadFile(fileData, audioFile)
      .then((res) => {
        if (res.data.status === 201) {
          openNotification(
            notificationTypes.success,
            "Success",
            "File uploaded successfully"
          );
          setGenerateBtnState("Generating...");

          return res.data.filename;
        } else {
          setGenerateBtnState("Generate");
          openNotification(
            notificationTypes.error,
            "Error",
            "File upload failed. Please try again."
          );
          return;
        }
      })
      .then((filename) => {
        setAudioData(null);
        // Make API call to generate the audio
        cloneVoice(prompt, filename)
          .then((res) => {
            setGenerateBtnState("Generate");
            if (res.data.status === 200) {
              setAudioData(res.data);
              setCaptions(res.data.prompt.split(" "));
              openNotification(
                notificationTypes.success,
                "success",
                `Generation completed in ${res.data.generationTime.toFixed(
                  2
                )} seconds.`
              );
            } else {
              openNotification(
                notificationTypes.error,
                "Error",
                `Generation failed. Please try again later.`
              );
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };

  const handleCaptions = () => {
    handleCaptionDisplay(captions, setCurSpokenWordIdx);
  };

  return (
    <div className={styles.container}>
      <PageTitle title={pageTitles.VOICE_ACTING} />
      <div className={styles.contentContainer}>
        <div className={styles.formContainer}>
          <InputLabel
            label="1. Select a reference audio"
            helpText="Select the audio like which you want the generated to voice to sound"
          />

          <FileInput onChangeHandler={(e) => setAudioFile(e.target.files[0])} />

          <br />
          <br />

          <InputLabel
            label="2. Enter the text prompt"
            helpText="Please enter a valid text prompt"
            sideText={`${prompt.length} chars so far...`}
          />
          <TextAreaInput
            value={prompt}
            onChangeHandler={(e) => setTextPrompt(e.target.value)}
            maxLength={100000}
          />
          <div className={styles.promptsCtnr}>
            {testPrompts.map((prompt, promptIdx) => (
              <div
                key={promptIdx}
                className={styles.promptCard}
                onClick={() => setTextPrompt(prompt.text)}
              >
                {prompt.abrev}
              </div>
            ))}
          </div>

          <CustomButton
            text={generateBtnState}
            onClickHandler={handleGenerate}
          />
        </div>
        <div className={styles.resultContainer}>
          <h3 className={styles.audioHeading}>Generated Audio</h3>

          {audioData === null ? (
            <div className={styles.noAudio}>
              {generateBtnState === btnStates.generating
                ? "Generating..."
                : "NO AUDIO GENERATED"}
            </div>
          ) : (
            <div className={styles.audioContainer}>
              <audio
                src={`${SERVER_BASE_URL}${audioData.url}`}
                type="audio/wav"
                controls
                onPlay={handleCaptions}
              >
                <p>
                  Your browser doesn't support HTML5 audio. Here is a{" "}
                  <a href={`${SERVER_BASE_URL}${audioData.url}`}>
                    link to the audio
                  </a>{" "}
                  instead.
                </p>
              </audio>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default CloneVoicePage;
