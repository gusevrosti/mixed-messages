const setup = ` - Knock, knock. \n - Who's There?`;

/**
 * Chooses a random item from a passed array and returns it's value.
 * @param {Array} arr the array to choose a random item from.
 * @returns {string} a random item's value of a passed array.
 */
const chooseRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];