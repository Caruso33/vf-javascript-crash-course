/**
 * In JavaScript, constructors are simply functions that utilize the "this"
 * pointer to assemble an object. They are invoked in conjunction with the
 * "new" keyword. By convention, their names are capitalized.
 */

// define our Hacker constructor
function Hacker(params) {
  this.name  = params.name;
  this.quote = params.quote;
}

// initialize our hackers
var zeroCool = new Hacker({
  name  : 'Zero Cool',
  quote : 'Mess with the best, die like the rest.',
});

var acidBurn = new Hacker({
  name  : 'Acid Burn',
  quote : 'Never send a boy to do a woman\'s job.',
});

// dump the objects for inspection
console.log(zeroCool);
console.log(acidBurn);
