exports.summation = function(values, operation, start) {
  /**
   * @param {Array}
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