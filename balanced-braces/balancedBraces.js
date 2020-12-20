function balancedBraces(str) {
  const opening = ["[", "{", "("];
  const closing = ["]", "}", ")"];
  const braces = { "[": "]", "(": ")", "{": "}" };
  let temp = [];
  let i = 0;
  while (i < str.length) {
    const cur = str[i];
    if (opening.includes(str[i])) {
      temp.push(str[i]);
    } else if (closing.includes(str[i])) {
      let last = temp[temp.length - 1];
      cur === braces[last] ? temp.pop() : temp.push(cur);
    }
    i++;
  }

  return temp.length === 0 ? true : false;
}

export { balancedBraces };

console.log(
  balancedBraces("for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}}")
); // true
console.log(
  balancedBraces("for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}")
); // false
console.log(
  balancedBraces("for(i=0;i<x[[i];i++){if(x[i]<10){b++;}else{b+=10;}}")
); // false
console.log(
  balancedBraces("for(i=0;i<x[i];i++){if(x[i]<10{b++;}else{b+=10;}}")
); // false
console.log(
  balancedBraces("for[(i=0;i<xi];i++){if(x[i]<10){b++;}else{b+=10;}}")
); // false
console.log(
  balancedBraces("for(i=0;i<x[i];i++)({ifx[i]<10){b++;}else{b+=10;}}")
); // false

console.log(balancedBraces("{}")); // true
console.log(balancedBraces("{()[{}[]]}")); // true
console.log(balancedBraces("{(})")); //false
console.log(balancedBraces("{()[}[]]}")); //false
console.log(balancedBraces("if(a==b) x = y;")); // true
console.log(balancedBraces("if(a==b x = y;")); //false
console.log(balancedBraces("if(x<10}(b++;}else{b+=10;}")); //false
