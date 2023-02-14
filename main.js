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
  const setup = `- Knock, knock.\n- Who's There?\n- ${name}.`;
  if (name === 'Tank') {
    console.log(`${setup}\n- ${punchline}`);
  } else {
    console.log(`${setup}\n- ${name} ${punchline}`);
  }
};

constructJoke();

// Since I feel that the code above doesn't quite meet the brief (but I don't want to remove it) here is another solution:
// Affirmations below are borrowed from - https://www.oprahdaily.com/life/relationships-love/g25629970/positive-affirmations/
const affirmations = [
  '"I am in the right place at the right time, doing the right thing"',
  '"Conscious breathing is my anchor"',
  '"You are loved just for being who you are, just for existing"',
  '"The chance to love and be loved exists no matter where you are"',
  '"Courage starts with showing up and letting oursleves be seen"',
  '"Make way for the unprecedented and watch your reality rearrange yourself"',
  '"Open your heart and drink in the glorious day"',
  '"Am I good enough? Yes I am!"',
];
const focusArray = [
  'yourself',
  'getting things done',
  'love',
  'gratitude',
  'rejuvenating',
  'family',
];
const reminder = [
  'call your loved ones',
  'smile',
  'drink water',
  'water your plants',
  'take brakes',
];

/**
 * Constructs a random message with positive wishes
 */
const constructMessage = () => {
  const todayAffirmation =
    'Your affirmation for today is ' + chooseRandomItem(affirmations);
  const todayFocus =
    'You should focus today on ' + chooseRandomItem(focusArray);
  const todayReminder = `Don't forget to ${chooseRandomItem(reminder)} today`;
  console.log(`${todayAffirmation}.\n${todayFocus}.\n${todayReminder}.`);
};

constructMessage();