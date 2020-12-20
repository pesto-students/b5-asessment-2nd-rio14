const arrayCubeRootToJson = (arr) => {
  let arrayInJson = {};
  arr.map((a) => {
    arrayInJson[a] = Math.cbrt(a);
  });
  return arrayInJson;
};

export { arrayCubeRootToJson };

// console.log(arrayCubeRootToJson([27, 64, 125]));
// { '27': 3, '64': 4, '125': 5 }
// console.log(arrayCubeRootToJson(["27", "64", "125", 1]));
// { '1': 1, '27': 3, '64': 4, '125': 5 }
// console.log(arrayCubeRootToJson([-1, 1, Infinity, 64, -64]));
// { '1': 1, '64': 4, '-1': -1, Infinity: Infinity, '-64': -4 }
