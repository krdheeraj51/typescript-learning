function add(n1: number, n2: number): number {
  return n1 + n2;
}
function printResult(num: number): void {
  console.log("Result :", num);
}
// defined function type
let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues=printResult;
// combineValues=5;

//function type and callback
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

console.log(printResult(add(5, 12)));

console.log(combineValues(4, 5));

addAndHandle(10,20,(result)=>{
    console.log(result)
})