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
