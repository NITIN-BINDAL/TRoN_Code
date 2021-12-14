/**
 *
 * @param {Number} milliseconds Number of milliseconds. Eg : 5000 milliseconds = 5 secs.
 * @returns {Promise}
 */
export const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};


export const handleCaptionDisplay = async (captions, setCurSpokenWordIdx) => {
  // Looping through words
  for (let idx = 0; idx < captions.length; idx++) {
    setCurSpokenWordIdx(idx);
    await sleep(269);
  }
  setCurSpokenWordIdx(-1);
};