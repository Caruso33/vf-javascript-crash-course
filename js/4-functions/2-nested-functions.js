/**
 * In JavaScript, the only way to create a new scope is by entering into a
 * function body. Thus, it is possible to emulate "private" functions (and
 * methods) by nested function definitions, even though JavaScript itself has
 * no concept of "private".
 */

// define outer function foo
function foo() {
  console.log('foo');

  // within the scope of foo, define bar
  function bar() {
    console.log('bar');
  }

  // invoke bar from within foo - this works
  bar();
}

// invoke foo from the global scope - works
foo();

// invoke bar from the global scope - fatal crash
bar();
