/**
 * The best-practice for creating Objects in JavaScript is to use the literal
 * notation called JSON - JavaScript Object Notation.
 */

// create a basic object
var hacker = {
  firstName  : 'Andrew',
  lastName   : 'Hoog',
  occupation : 'Hacker Hotshot',

  // note that objects contain nested objects:
  specializations : [
    'Android Forensics',
    'iOS Forensics',
  ],
};

// In order to give an object a method, simply attach a function as a property:
hacker.introduce = function() {

  // from within a method, the "this" pointer points to the object to which the
  // method belongs.
  console.log('Hi, my name is ' + this.firstName + '.');
};

// invoke our new method
hacker.introduce();
