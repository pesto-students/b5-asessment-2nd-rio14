// export { forEach, map, filter, reduce };

const customForEach = (array) => {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
};

const customMap = (array) => {
  let array2 = [];
  for (let index = 0; index < array.length; index++) {
    array2.push(array[index]);
  }
  return array2;
};

const customFilter = (array) => {
  let array2 = [];
  for (let index = 0; index < array.length; index++) {
    // expression for filtering
    if (array[index] > 2) {
      array2.push(array[index]);
    }
  }
  return array2;
};

const customReduce = (array) => {
  let result = 0;
  for (let index = 0; index < array.length; index++) {
    // expression for reduce
    result += array[index];
  }
  return result;
};

console.log("forEach", customForEach([1, 2, 3, 4]));
console.log("map", customMap([1, 2, 3, 4]));
console.log("filter", customFilter([1, 2, 3, 4]));
console.log("filter", customReduce([1, 2, 3, 4]));
