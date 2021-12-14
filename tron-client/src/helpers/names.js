var random = require("random-name");
export const getRandomName = () => {
  return `${random.first()} ${random.last()}`;
};
