// constants
import { routes } from "./routes";

// Components
import HomePage from "../pages/HomePage";
import GenerateVoiceoverPage from "../pages/GenerateVoiceoverPage";
import CreateAudioBookPage from "../pages/CreateAudioBookPage";
import CreateConversationPage from "../pages/CreateConversationPage";
import CloneVoicePage from "../pages/CloneVoicePage";
import ResultDemoPage from "../pages/ResultDemoPage";

export const routesToRender = [
  {
    exact: true,
    path: routes.LANDING_PAGE,
    component: HomePage,
  },
  {
    exact: true,
    path: routes.HOME,
    component: HomePage,
  },
  {
    exact: true,
    path: routes.CREATE_CONVERSATION,
    component: CreateConversationPage,
  },
  {
    exact: true,
    path: routes.AUDIO_BOOK,
    component: CreateAudioBookPage,
  },
  {
    exact: true,
    path: routes.GENERATE_VOICEOVER,
    component: GenerateVoiceoverPage,
  },
  {
    exact: true,
    path: routes.CLONE_VOICE,
    component: CloneVoicePage,
  },
  {
    exact: true,
    path: routes.RESULTS_DEMO,
    component: ResultDemoPage
  }
];

export const pageTitles = {
  GENERATE_VOICEOVER: "Generate Voiceover",
  CREATE_AUDIOBOOK: "Create AudioBook",
  CREATE_CONVERSATION: "Create Conversation",
  VOICE_ACTING: "Voice Acting",
  RESULTS_DEMO: "Demo",
};
