/**
 * In JavaScript, functions (under the hood) are objects. As such, it is
 * possible to attach arbitrary members and methods to a function the same way
 * that you would to a "normal" object.
 *
 * A technique known as "memoization" exploits that trait to buffer the result
 * of function calls for future retrieval. (Note that this is not a typo: the
 * term is "memoization", not "memorization" as you might assume.)
 */

// Pretend that this is some some really computationally expensive hash
// function that we would like to invoke sparingly
function hash(value) {
  if (!this.cache) {
    console.log('initial invokation');
    this.cache = 'hash-of-' + value;
  }

  return this.cache;
}

// The first time hash is invoked, its cache property is undefined, so the hash
// is calculated and then saved.
console.log(hash('whatever'));

// The second time hash is invoked, the cache has already been primed, so the
// hash value can simply be retrieved. This saves the expense of calculating
// the hash a second time.
console.log(hash('whatever'));
