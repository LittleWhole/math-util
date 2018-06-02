/**
 * Use summation on an array, with a specified operation.
 * @param {Array} values - The array to use.
 * @param {String} [operation="addition"] - The operation to perform.
 * @param {Number} [start=0] - What value to start at when summation is performed.
 */
exports.summation = function(values, operation, start) {
  let result;
  if (!start) result = 0;
  if (!operation) operation = "addition";
  else result = start;
  if (operation == "addition") {
    values.forEach(value => {
      result += value;
    });
  }
  else if (operation == "subtraction") {
    values.forEach(value => {
      result -= value;
    });
  }
  else if (operation == "multiplication") {
    values.forEach(value => {
      result *= value;
    });
  }
  else if (operation == "division") {
    values.forEach(value => {
      result /= value;
    });
  }
  else if (operation == "n-root") {
    if (start == 0) console.warn("Result returned will always be 0 if start is not specified.");
    values.forEach(value => {
      result = Math.pow(result, 1/value);
    });
  }
  else if (operation == "exponent") {
    if (start == 0) console.warn("Result returned will always be 0 if start is not specified.");
    values.forEach(value => {
      result = Math.pow(result, value);
    });
  }
  
  // Return the result
  return result;
}

/**
 * The trigonometric sine function, calculates using degrees.
 * @type {Number}
 */
exports.sin = function(value) {
  return Math.sin(value * Math.PI / 180.0);
}

/**
 * The trigonometric cosine function, calculates using degrees.
 * @type {Number}
 */
exports.cos = function(value) {
  return Math.cos(value * Math.PI / 180.0);
}

/**
 * The trigonometric tangent function, calculates using degrees.
 * @type {Number}
 */
exports.tan = function(value) {
  return Math.tan(value * Math.PI / 180.0);
}

/**
 * The trigonometric cotangent function, calculates using degrees.
 * @type {Number}
 */
exports.cot = function(value) {
  return 1 / Math.tan(value * Math.PI / 180.0);
}

/**
 * The trigonometric cotangent function, calculates using radians.
 * @type {Number}
 */
exports.cotRad = function(value) {
  return 1 / Math.tan(value);
}

/**
 * The trigonometric secant function, calculates using degrees.
 * @type {Number}
 */
exports.sec = function(value) {
  return 1 / Math.cos(value * Math.PI / 180.0);
}

/**
 * The trigonometric secant function, calculates using radians.
 * @type {Number}
 */
exports.secRad = function(value) {
  return 1 / Math.cos(value);
}

/**
 * The trigonometric cosecant function, calculates using degrees.
 * @type {Number}
 */
exports.csc = function(value) {
  return 1 / Math.sin(value * Math.PI / 180.0);
}

/**
 * The trigonometric cosecant function, calculates using radians.
 * @type {Number}
 */
exports.cscRad = function(value) {
  return 1 / Math.sin(value)
}