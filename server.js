exports.summation = function(values, operation, start) {
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
  else if (operation == "di
  
  return result;
}