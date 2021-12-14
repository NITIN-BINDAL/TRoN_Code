import { v4 as uuidv4 } from "uuid";
import { POST } from "../config/api";
import { apiEndpoints } from "../constants/apiEndpoints";

export const generateAudio = (body) => {
  const audioId = uuidv4();
  return POST(`${apiEndpoints.GENERATE_AUDIO}`, { ...body, audioId: audioId });
};

export const generateAudiobook = (body) => {
  const audioId = uuidv4();
  return POST(
    `${apiEndpoints.GENERATE_AUDIOBOOK}`,
    {
      ...body,
      audioId: audioId,
    },
    {},
    // 30 Minutes
    60000 * 30
  );
};

export const uploadFile = (data, audioFileData) => {

  const fileType = audioFileData.name.split(".")[1];

  const fileId = uuidv4();
  return POST(`${apiEndpoints.UPLOAD}/${fileId}.${fileType}`, data);
};

export const cloneVoice = (prompt, filename) => {
  const audioId = uuidv4();
  return POST(`${apiEndpoints.CLONE_VOICE}`, {
    audioId: audioId,
    prompt: prompt,
    filename: filename,
  });
};
