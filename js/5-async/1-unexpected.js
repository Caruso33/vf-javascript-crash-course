/**
 * JavaScript is a non-blocking, asynchronous language. This can cause it to
 * manifest behaviors that seem very weird the first time you encounter them.
 *
 * Try to guess what the following code is going to do before you run it:
 */

// Simulate a long-running function
function takesAWhile(param) {
  setTimeout(function(p) {
    console.log(p);
  }, 2000, param);
};


// begin
console.log('begin');

// invoke takesAWhile 3 times
for (var i = 0; i < 3; i++) {
  takesAWhile(i);
};

// end
console.log('end');

// Was the output what you expected?
