const array = ['Big', 'Little', 'Nice', 'Square', 'Fat'];

/**
 * Chooses a random item from a passed array and returns it's value.
 * @param {Array} arr the array to choose a random item from.
 * @returns {string} a random item's value of a passed array.
 */
const chooseRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// A small and easy test for chooseRandomItem
for (let i = 0; i < 10; i++) {
  console.log(chooseRandomItem(array));
}
