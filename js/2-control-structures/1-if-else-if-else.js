/**
 * "if", "else if", and "else" behave as you may expect from C-like languages.
 */

var username = 'admin';

if (username === 'admin') {
  console.log('Hello, admin');
}

// note "else if": not "elif", "elsif", or other insanity
else if (username === 'andrew') {
 console.log('Hello, Andrew');
}

else {
 console.log('Have we met?');
}
