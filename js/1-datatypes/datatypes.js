// create an array of some different data types
var items = [
  1,              // number
  'One',          // string
  true,           // boolean. Note "true", not "True"
  [],             // array - but will report as "object"!
  {},             // object
  undefined,      // undefined
  null,           // another weird "object"!
  function () {}, // `function` is also a type
];

// iterate over each element in the array, and see which type it reports to be
for (var i = 0; i < items.length; i++) {
  var item = items[i];
  
  // The `typeof` operator can be used to determine a variable's type
  console.log('Value: ' + item + ', Type: ' + typeof item);
};

console.log("\nDetecting arrays:");

// In JavaScript, arrays are objects under-the-hood, and as such, will
// self-identify as objects when interrogated with the `typeof` operator:
console.log('typeof []: ' + typeof []);

// That's quite unhelpful.
//
// To properly determine whether or not an item is an array, however, you may
// use the Array.isArray() method
console.log('Array.isArray([]): ' + Array.isArray([]));

// Frankly, JavaScript is a real mess regarding how it identifies certain data
// types. For more examples, see: https://www.destroyallsoftware.com/talks/wat
