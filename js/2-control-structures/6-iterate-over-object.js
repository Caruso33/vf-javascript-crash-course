// create an object using the literal syntax
var language = {
  name     : 'javascript',
  ancestry : 'C, C++, Java, ECMA',
  notes    : 'Cooler than it seems at first',
};

// iterate over the object's properties
for (var key in language) {
  // note the [] notation
  console.log(key + ': ' + language[key]);
}
