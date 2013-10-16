/**
 * JavaScript also implements a ternary operator that is patterned after the
 * C-like languages.
 */

var isAuthenticated = 'true';

// this...
var msg = '';
if (isAuthenticated) {
  msg = 'Welcome aboard!';
} else {
  msg = 'GTFO!';
}

// ... can be written like this more succinctly :
var msg = (isAuthenticated) ? 'Welcome aboard!' : 'GTFO!' ;
