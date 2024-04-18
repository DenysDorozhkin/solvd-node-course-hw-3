function createCounter() {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}

function repeatFunction(func, number) {
  if (number < 0) {
    return (...args) => {
      while (true) {
        func(...args);
      }
    };
  }
  return (...args) => {
    for (let i = 0; i < number; i++) {
      func(...args);
    }
  };
}
