// Pretend that this is some some really computationally expensive hash
// function that we would like to invoke sparingly
function hash(value) {

  /**
   * Because functions are objects in JavaScript, a function can use the normal
   * `this` pointer to attach arbitrary properties to itself. Exploiting this
   * trait to cache the result of a function invokation (for future retrieval)
   * is called "memoization". (Note that that's not a typo. It's "memoization",
   * not "memorization".)
   */
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
