var async = {
  sequence: sequenceFunction
}

// sequence
function sequenceFunction(/* [foo1, foo2, foo3...] */) {
  var functionArray = Array.prototype.slice.apply(arguments[0]);  // functions to be called sequentially
  var current = 0;  // currently called function index
  var finalCallback = null; // the final callback function

  // iterator function
  var next = function (err, result) {
    if (current == functionArray.length || err) {
      if (finalCallback) {
        finalCallback(err, result);
      }

      return;
    }
    functionArray[current](next, result);
    current++;
  };

  return function (final) {
    finalCallback = final;
    next();
  };
}

// parallel


// race

module.exports = async;
