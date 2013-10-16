/**
 * In JavaScript, "==" is the "equality operator". It checks to see if, after
 * punning has been applied, its left- and right-hand operands have the same
 * value.
 *
 * If you don"t want type-punning to effect the results of your comparisons,
 * however, you may use "===", which is called the "equality" operator. The
 * equality operators only returns true if its left- and right-hand operands
 * are not only of the same value (after punning), but also of the same /type/.
 * Thus, it functionally mitigates type-punning when used in comparisons.
 *
 * Using === whenever one might otherwise use == is generally considered to be
 * best-practice among JavaScripters.
 */
if (0 === false) {
  console.log('huh?');
}

if (NaN === false) {
  console.log('what?');
}

if ('' === false) {
  console.log('srsly?');
}

if (null === false) {
  console.log('wtf?!');
}

if (undefined === false) {
  console.log('make it stop...');
}
