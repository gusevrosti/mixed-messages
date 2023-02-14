const jokeBodies = [
  ['Nobel', `that's why I nocked.`],
  ['Luke', 'through the peep hole and find out.'],
  ['Figs', `the doorbell, it's not working!`],
  ['Annie', 'thing you can do, I can do too!'],
  ['Hal', `will you know if you don't opne the door?`],
  ['Tank', `You're welcome.`],
];

/**
 * Chooses a random item from a passed array and returns it's value.
 * @param {Array} arr the array to choose a random item from.
 * @returns {string} a random item's value of a passed array.
 */
const chooseRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

/**
 * Constructs a random Knock-knock joke and logs it to the console.
 */
const constructJoke = () => {
  const jokeBody = chooseRandomItem(jokeBodies);
  const name = jokeBody[0];
  const punchline = jokeBody[1];
  const setup = ` - Knock, knock. \n - Who's There? \n - ${name}.`;
  if (name === 'Tank') {
    console.log(`${setup} \n - ${punchline}`);
  } else {
    console.log(`${setup} \n - ${name} ${punchline}`);
  }
}

constructJoke();