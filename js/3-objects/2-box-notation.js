/**
 * The common notation for accessing object members and methods is "dot"
 * notation. However, "box notation" exists as well. It can be used when it is
 * necessary to access a property whose name contains characters which are not
 * allowed within a variable name.
 */

// When defining an object whose key names contain characters that are
// forbidden in a variable name, the key name must be enclosed in quotation
// marks.
var departments = [
  {
    'name' : 'Billing',
    // without the quotation marks, this property would cause a fatal error
    'ext#' : '001',
  },
  {
    'title' : 'Junior Developer',
    // without the quotation marks, this property would cause a fatal error
    'ext#'  : '002',
  },
];

// Likewise, when reading a properties whose names contain characters which are
// not allowed in variable names, the box notation must be used:
console.log(departments[0]['ext#']); // "001"

// This will cause a fatal error:
//console.log(departments[0].ext#);

// Box notation is also useful when accessing a property dynamically:
var fetch = 'ext#';
console.log(departments[1][fetch]); // "002"
