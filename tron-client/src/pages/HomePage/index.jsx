import styles from "./HomePage.module.css";

// constants
import history from "../../config/history";
import { routes } from "../../constants/routes";

// components
import { FaMicrophoneAlt, FaFileAudio } from "react-icons/fa";
import { SiAudiomack } from "react-icons/si";
import { IoLogoIonitron } from "react-icons/io5";
import CustomButton from "../../components/CustomButton";

const featuresList = [
  {
    name: "Voiceovers",
    icon: <FaMicrophoneAlt />,
  },
  {
    name: "Voice Acting",
    icon: <SiAudiomack />,
  },
  {
    name: "Audio Books",
    icon: <FaFileAudio />,
  },
];

const tryNowBtnStyles = {
  animation: "bounce 2s infinite alternate",
  minWidth: "33%",
};

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <h1 className={styles.title}>TRoN</h1>
        <p className={styles.paragraph}>
          Generate realistic voices with just few clicks!
        </p>
        <div className={styles.featureContainer}>
          {featuresList.map((feature, featureIdx) => (
            <div key={featureIdx} className={styles.featureCard}>
              <div className={styles.featureIconContainer}>{feature.icon}</div>
              <div>{feature.name}</div>
            </div>
          ))}
        </div>

        <CustomButton
          text="Try TRoN for Free!"
          type="primary"
          customStyle={tryNowBtnStyles}
          onClickHandler={() => history.push(routes.GENERATE_VOICEOVER)}
        />
      </div>

      <div className={styles.rightColumn}>
        <IoLogoIonitron />
      </div>
    </div>
  );
};

export default HomePage;
