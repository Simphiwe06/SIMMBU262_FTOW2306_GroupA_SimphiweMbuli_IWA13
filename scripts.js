let state = 'idle';
let user = null;
let calculated = '1';

// Only allowed to change below

const logCalc = () => {
  const isString = typeof calculated === 'string';
  const calculatedAsNumber = isString ? parseInt(calculated) : parseFloat(calculated);
  return calculatedAsNumber + 1; // Return the calculated value + 1
};

const calcUser = () => {
  calculated = logCalc(); // Assign the calculated value from logCalc
  if (calculated > 2) user = 'John';
  if (calculated > 2) state = 'requesting';
  if (calculated > 3) state = 'idle';
};

const checkUser = () => {
  if (user && state === 'requesting') {
    console.log(`User: ${user} (${calculated})`);
  }
};

// Only allowed to change code above

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();
