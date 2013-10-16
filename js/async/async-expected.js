// require the async dependency
var async = require('async');

// Simulate a long-running function which this time provides a callback
function takesAWhile(param, callback) {
  setTimeout(function(p) {
    console.log(p);
    callback();
  }, 2000, param);
};

// begin
console.log('begin');

// create an array of items
var items = [1, 2, 3];

// iterate over each in series
async.eachSeries(
  items,
  takesAWhile,
  function() {
    console.log('end');
  }
);

