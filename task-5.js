function lazyMap(array, mappingFunc) {
  let index = 0;
  return {
    [Symbol.iterator]: function () {
      return {
        next: () => {
          if (index < array.length) {
            return { value: mappingFunc(array[index++]), done: false };
          } else {
            return { done: true };
          }
        },
      };
    },
  };
}

function fibonacciGenerator() {
  let previous = 0;
  let current = 1;
  return {
    [Symbol.iterator]: function () {
      return {
        next: () => {
          const result = { value: current, done: false };
          const temp = current;
          current += previous;
          previous = temp;
          return result;
        },
      };
    },
  };
}
