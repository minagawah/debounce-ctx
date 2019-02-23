/**
 * @param {Function} [f] Function to apply debounce.
 * @param {number} [wait] Time you want to suppress.
 * @param {Object} [ctx] Context to bind the function.
 * @returns {Function}
 */
function debounce (f, wait, ctx) {
  if (typeof f !== 'function') {
    throw new Error('No function is given');
  }
  if (typeof wait === 'undefined') {
    wait = 400;
  }
  if (typeof ctx === 'undefined') {
    ctx = null;
  }
  var timeout = null;
  var args = null;
  var g = function () {
    (typeof Reflect === 'object') ?
      Reflect.apply(f, ctx, args) :
      Function.prototype.apply.call(f, ctx, args);
  };
  return function () {
    ctx = ctx || this || {}; // Use the given context (if there is one).
    args = arguments;
    if (timeout) {
      clearTimeout(timeout);
    } else {
      g();
    }
    timeout = setTimeout(g, wait);
  };
}
  
module.exports = debounce;
