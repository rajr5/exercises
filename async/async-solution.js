var async = {
  sequence: sequenceFunction
}


// sequence
function sequenceFunction(/* async function w/ cb second */) {
  var functionArray = Array.prototype.slice.apply(arguments[0]);
  var current = 0;  // currently called function
  var finalCallback = null;

  // iterator function
  var next = function (err, result) {
    if (current == functionArray.length || err) {
      finalCallback(err, result);
      return;
    }
    functionArray[current](next, result);
    current++;
  };

  return function (final) {
    // functionArray.push(final);
    finalCallback = final;
    next();
  };
}

// parallel


// race

module.exports = async;
