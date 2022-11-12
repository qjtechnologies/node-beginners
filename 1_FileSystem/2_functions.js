function multiply(num1, num2) {
  const num3 = num1 * num2;
  return num3;
}

// console.log(multiply(15, 15));

const arrowMultiply = (num1, num2) => {
  const num3 = num1 * num2;
  return num3;
};

console.log(arrowMultiply(20, 20));

const x = 100;
const y = "some string";
const z = 100.22;

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
