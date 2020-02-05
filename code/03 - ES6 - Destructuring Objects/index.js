const personalInformation = {
    firstName: 'Dylan',
    lastName: 'Israel',
    city: 'Austin',
    state: 'Texas',
    zipCode: 73301
};

const {firstName, lastName} = personalInformation;

console.log(`${firstName} ${lastName}`);
console.log(personalInformation);

const {firstName: fn, lastName: ln} = {firstName: 'Joe', lastName: 'Bloggs'};

console.log(`${fn} ${ln}`);