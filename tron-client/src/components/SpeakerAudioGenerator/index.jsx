import { useState, useRef, Fragment } from "react";
import styles from "./SpeakerAudioGenerator.module.css";
import inputStyles from "../InputComponents/InputComponent.module.css";

// Constants
import {
  genderOptions,
  ageGroups,
  testPrompts,
} from "../../constants/speakerAudioGenerator";
import { SERVER_BASE_URL } from "../../config/api";
import { colors } from "../../constants/colors";

// Helper Functions
import { getRandomName } from "../../helpers/names";
import { generateAudio, generateAudiobook } from "../../api/requests";
import { handleCaptionDisplay } from "../../helpers/misc";
import {
  openNotification,
  notificationTypes,
} from "../../helpers/notifications";

// Icons
import { MdModeEdit } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { IoMdFemale, IoMdMale } from "react-icons/io";

// components
import CustomButton from "../../components/CustomButton";
import InputLabel from "../../components/InputComponents/InputLabel";
import TextAreaInput from "../../components/InputComponents/TextAreaInput";
import TextInput from "../../components/InputComponents/TextInput";

const generateBtnTexts = {
  GENERATE: "Generate",
  GENERATING: "Generating...",
};

const generationTypes = {
  voiceoverGen: "voiceover",
  audiobookGen: "audiobook",
};

const SpeakerAudioGenerator = ({
  speakerId = "",
  generationType = generationTypes.voiceoverGen,
}) => {
  // REFs
  const settingsContainerREF = useRef(null);

  // States
  const [showSettings, setShowSettings] = useState(false);
  const [speakerName, setSpeakerName] = useState(getRandomName());
  const [speakerAge, setSpeakerAge] = useState(ageGroups[0].value);
  const [speakerGender, setSpeakerGender] = useState(genderOptions[1].value);
  const [textPrompt, setTextPrompt] = useState("");
  const [generateBtnTxt, setGenerateBtnText] = useState(
    generateBtnTexts.GENERATE
  );

  // Settings State
  const [settingsSpeakerName, setSettingsSpeakerName] = useState(speakerName);
  const [settingsSpeakerAge, setSettingsSpeakerAge] = useState(speakerAge);
  const [settingsSpeakerGender, setSettingsSpeakerGender] =
    useState(speakerGender);

  // store the response of the generated audio here
  const [audioData, setAudioData] = useState(null);
  const [captions, setCaptions] = useState([]);
  const [curSpokenWordIdx, setCurSpokenWordIdx] = useState(-1);

  // Toggling Settings
  const toggleSettings = () => {
    if (showSettings) {
      settingsContainerREF.current.style.top = "101vh";
    } else {
      settingsContainerREF.current.style.top = "0";
    }
    setShowSettings(!showSettings);
  };

  const handleGenerate = () => {
    // check if empty text prompt
    if (textPrompt.length === 0) {
      openNotification(
        notificationTypes.error,
        "Error",
        "The text prompt was empty!!!"
      );
      return;
    }

    setGenerateBtnText(generateBtnTexts.GENERATING);

    const requestBody = {
      prompt: textPrompt,
      sex: speakerGender,
      age: speakerAge,
    };

    setAudioData(null);

    let generatorFunction = null;

    switch (generationType) {
      case generationTypes.audiobookGen:
        generatorFunction = generateAudiobook;
        break;
      // Default:  generationTypes.voiceoverGen
      default:
        generatorFunction = generateAudio;
        break;
    }

    generatorFunction(requestBody)
      .then((res) => {
        if (res.data.status === 200) {
          openNotification(
            notificationTypes.success,
            "success",
            `Generation completed in ${res.data.generationTime.toFixed(
              2
            )} seconds.`
          );
          setAudioData(res.data);
          setCaptions(res.data.prompt.split(" "));
        } else {
          alert("Server Error");
        }
        setGenerateBtnText(generateBtnTexts.GENERATE);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Save settings
  const handleSave = () => {
    if (settingsSpeakerName.length === 0) {
      openNotification(
        notificationTypes.error,
        "Invalid Name",
        "speaker name cannot be an empty string. Please enter a valid name."
      );
      return;
    }

    setSpeakerName(settingsSpeakerName);
    setSpeakerGender(settingsSpeakerGender);
    setSpeakerAge(settingsSpeakerAge);

    openNotification(
      notificationTypes.success,
      "Success",
      "New configuration was successfully saved."
    );

    toggleSettings();
  };

  const handleSettingsReset = () => {
    setSettingsSpeakerName(speakerName);
    setSettingsSpeakerGender(speakerGender);
    setSettingsSpeakerAge(speakerAge);

    openNotification(
      notificationTypes.success,
      "Success",
      "Last saved configuration was successfully restored."
    );
  };

  const handleCaptions = () => {
    handleCaptionDisplay(captions, setCurSpokenWordIdx);
  };

  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <div className={styles.name}>
            {speakerId !== "" && `${speakerId}.`}
            {speakerGender == 0 ? (
              <IoMdFemale style={{ color: colors.PRIMARY_PINK }} />
            ) : (
              <IoMdMale style={{ color: colors.PRIMARY_BLUE }} />
            )}
            {speakerName} a person in age group {speakerAge}
          </div>

          <MdModeEdit className={styles.editIcon} onClick={toggleSettings} />
        </div>
        <p className={styles.wordsSoFarText}>
          {textPrompt.length} characters so far...
        </p>

        {audioData === null ? (
          ""
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

        <TextAreaInput
          value={textPrompt}
          isDisabled={false}
          maxLength={5000}
          onChangeHandler={(e) => setTextPrompt(e.target.value)}
          placeholder="Type here..."
        />
        <h3 className={styles.testPromptHeading}>Test Prompts</h3>
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

        <div className={styles.buttonsContainer}>
          <CustomButton
            text="Clear text"
            type="secondary"
            onClickHandler={() => setTextPrompt("")}
            isDisabled={false}
          />
          <CustomButton
            text={generateBtnTxt}
            type="primary"
            onClickHandler={handleGenerate}
            isDisabled={generateBtnTexts.GENERATING === generateBtnTxt}
          />
        </div>
      </div>
      <div ref={settingsContainerREF} className={styles.settingsConatiner}>
        <div className={styles.formConatiner}>
          <div className={styles.formHeader}>
            <div>Speaker Settings</div>
            <IoCloseCircle onClick={toggleSettings} />
          </div>
          <InputLabel
            isRequired={true}
            label="Speaker Name"
            helpText="Enter custom name for the Speaker"
          />
          <TextInput
            value={settingsSpeakerName}
            onChangeHandler={(e) => setSettingsSpeakerName(e.target.value)}
          />
          <InputLabel
            isRequired={true}
            label="Speaker Gender"
            helpText="Select the gender for the Speaker"
          />
          <select
            className={`${inputStyles.container} ${inputStyles.select}`}
            value={settingsSpeakerGender}
            onChange={(e) => setSettingsSpeakerGender(e.target.value)}
          >
            {genderOptions.map((option, optionIdx) => (
              <option
                key={optionIdx}
                value={option.value}
                className={inputStyles.option}
              >
                {option.name}
              </option>
            ))}
          </select>
          <InputLabel
            isRequired={true}
            label="Speaker Age"
            helpText="Upper limit is excluded"
          />

          <select
            className={`${inputStyles.container} ${inputStyles.select}`}
            value={settingsSpeakerAge}
            onChange={(e) => setSettingsSpeakerAge(e.target.value)}
          >
            {ageGroups.map((option, optionIdx) => (
              <option
                key={optionIdx}
                value={option.value}
                className={inputStyles.option}
              >
                {option.name}
              </option>
            ))}
          </select>
          <div className={styles.settingsBtnsContainer}>
            <CustomButton
              text="Reset"
              type="tertiary"
              onClickHandler={handleSettingsReset}
              isDisabled={false}
            />
            <CustomButton
              text="Save Configuration"
              type="primary"
              onClickHandler={handleSave}
              isDisabled={false}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SpeakerAudioGenerator;
