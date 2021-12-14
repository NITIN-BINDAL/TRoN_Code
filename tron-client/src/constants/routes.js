// Icons
import { ImHome } from "react-icons/im";
import { FaMicrophone, FaFileAudio } from "react-icons/fa";
import { SiAudiomack } from "react-icons/si";
import { MdEmojiObjects } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";

export const routes = {
  LANDING_PAGE: "/",
  HOME: "/home",
  GENERATE_VOICEOVER: "/generate-voiceover",
  AUDIO_BOOK: "/audio-book",
  CREATE_CONVERSATION: "/create-conversation",
  CLONE_VOICE: "/voice-acting",
  RESULTS_DEMO: "/results-demo",
  HELP: "/help",
};

export const navbarLinks = [
  {
    name: "Home",
    route: routes.HOME,
    icon: <ImHome />,
  },
  {
    name: "Voiceover",
    route: routes.GENERATE_VOICEOVER,
    icon: <FaMicrophone />,
  },
  {
    name: "Audio Book",
    route: routes.AUDIO_BOOK,
    icon: <FaFileAudio />,
  },
  {
    name: "Conversation",
    route: routes.CREATE_CONVERSATION,
    icon: <IoChatboxEllipses />,
  },
  {
    name: "Voice Acting",
    route: routes.CLONE_VOICE,
    icon: <SiAudiomack />,
  },
  {
    name: "Results Demo",
    route: routes.RESULTS_DEMO,
    icon: <MdEmojiObjects />,
  },
];
