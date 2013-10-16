// Simulate a long-running function
function takesAWhile(param) {
  setTimeout(function(p) {
    console.log(p);
  }, 2000, param);
};


console.log('begin');

// invoke takesAWhile 3 times
for (var i = 0; i < 3; i++) {
  takesAWhile(i);
};

console.log('end');

// Was the output what you expected?
