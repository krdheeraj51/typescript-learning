type Comvinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  n1: Comvinable,
  n2: Comvinable,
  //   resultConversion: "as-number" | "as-text"
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }

  return result;
}

let addResult = combine(20, 30, "as-number");
console.log(addResult);
let stringConcatResult = combine("56", "70", "as-text");
console.log(stringConcatResult);
let textResult = combine("Dheeraj", " Kumar", "as-text");
console.log(textResult);
