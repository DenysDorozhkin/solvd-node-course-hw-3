function calculateFactorial(n, accumulator = 1) {
  if (n === 0) {
    return accumulator;
  }
  return calculateFactorial(n - 1, n * accumulator);
}

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else if (exponent > 0) {
    return base * power(base, exponent - 1);
  }
  return 1 / power(base, -exponent);
}
