/**
 * JavaScript provides a "switch" statement for occasions where one may
 * otherwise use multiple "if" statements.
 */

var username = 'admin';

// note "switch" and not "case"
switch (username) {
  case 'admin':
    console.log('Hello, admin');
    // without "break", will fall through
    break;
  case 'andrew':
    console.log('Hello, Andrew');
    break;
  default:
    console.log('Have we met?');
}
