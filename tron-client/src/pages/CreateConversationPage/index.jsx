import { useState } from "react";
import styles from "./CreateConversationPage.module.css";

// constants
import { pageTitles } from "../../constants/appConstants";

// components
import PageTitle from "../../components/PageTitle";
import CustomButton from "../../components/CustomButton";
import SpeakerAudioGenerator from "../../components/SpeakerAudioGenerator";

const CreateConversationPage = () => {
  const [speakersList, setSpeakersList] = useState([]);

  const handleAddSpeaker = () => {
    setSpeakersList([
      ...speakersList,
      {
        speakerID: speakersList.length,
      },
    ]);
  };

  return (
    <div className={styles.container}>
      <PageTitle title={pageTitles.CREATE_CONVERSATION} />
      <div className={styles.contentContainer}>
        <div className={styles.headerContainer}>
          <CustomButton
            text="+ Add Speaker"
            type="primary"
            onClickHandler={handleAddSpeaker}
          />
          <div>
            {speakersList.length > 0 &&
              `Speakers Count : ${speakersList.length}`}
          </div>
        </div>
        <div>
          {speakersList.length > 0 ? (
            <div className={styles.speakersContainer}>
              {speakersList.map((speaker) => (
                <SpeakerAudioGenerator
                  key={speaker.speakerID}
                  speakerId={speaker.speakerID + 1}
                />
              ))}
            </div>
          ) : (
            <div className={styles.noSpeakerPlaceholder}>
              No Speaker Added Yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateConversationPage;
