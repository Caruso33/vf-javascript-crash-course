/**
 * To help manage the complexity of working asynchronously, libraries like
 * "async" are commonly used.
 *
 * The following is an implementation of the concept introduced previously.
 * This one, however, works as you'd expect:
 */

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

  // when the callback function is invoked, end the program
  function() {
    console.log('end');
  }
);

// more information on async can be found here:
// https://github.com/caolan/async

