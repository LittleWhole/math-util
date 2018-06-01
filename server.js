exports.summation = function(values, operation, start) {
  /**
   * @param {Array} values - The array to use.
   * @param {string} operation - The operation to perform.
   * @param {number} [start=0] - What value to start at when summation is performed.
   */
  let result;
  if (!start) result = 0;
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

exports.sin = 