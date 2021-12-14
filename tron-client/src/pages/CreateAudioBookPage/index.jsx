// constants
import { pageTitles } from "../../constants/appConstants";
// components
import PageTitle from "../../components/PageTitle";
import SpeakerAudioGenerator from "../../components/SpeakerAudioGenerator";

const CreateAudioBookPage = () => {
  return (
    <div>
      <PageTitle title={pageTitles.CREATE_AUDIOBOOK} />
      <SpeakerAudioGenerator generationType="audiobook" />
    </div>
  );
};

export default CreateAudioBookPage;
