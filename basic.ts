function add(n1:number,n2:number,showResult:boolean,phrase:string){
    if(typeof n1 !=='number' && typeof n2 !=='number'){
        throw new Error("Incorrect Input!");
        
    }
    const result=n1+n2;
    if(showResult){
        console.log(phrase + result)
    }
    return n1+n2;
}

const number1=5;
const number2= 30;
let printResult=true;
let resultPhrase='Result is : ';
const result =add(number1,number2,printResult,resultPhrase);
console.log(result)