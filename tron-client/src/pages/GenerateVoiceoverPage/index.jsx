// constants
import { pageTitles } from "../../constants/appConstants";


// components
import PageTitle from "../../components/PageTitle";
import SpeakerAudioGenerator from "../../components/SpeakerAudioGenerator";

const GenerateVoiceoverPage = () => {
  return (
    <div>
      <PageTitle title={pageTitles.GENERATE_VOICEOVER} />
      <SpeakerAudioGenerator />
    </div>
  );
};

export default GenerateVoiceoverPage;
