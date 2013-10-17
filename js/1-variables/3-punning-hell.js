/**
 * JavaScript is a loosely-typed language, and will automatically type-pun when
 * comparisons are being performed. This can have some really unfortunate
 * side-effects:
 */

if (!0) {
  console.log('huh?');
}

if (!NaN) {
  console.log('what?');
}

if (!'') {
  console.log('srsly?');
}

if (!null) {
  console.log('wtf?!');
}

if (!undefined) {
  console.log('make it stop...');
}

/**
 * Even worse: while the above are "falsy", they do not necessarily always
 * equate to a boolean false:
 */

// this is true...
if (0 == false) {
  console.log('huh?');
}

if (NaN == false) {
  console.log('what?');
}

// ... and this is true. The others are not, however :/
if ('' == false) {
  console.log('srsly?');
}

if (null == false) {
  console.log('wtf?!');
}

if (undefined == false) {
  console.log('make it stop...');
}

/**
 * These quirks (and/or "bugs in the language") can quickly become a huge PITA.
 * And if you haven't already, you really should watch this:
 *
 * https://www.destroyallsoftware.com/talks/wat
 */
