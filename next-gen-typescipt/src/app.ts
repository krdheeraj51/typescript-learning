// Code goes here!

const userName='Dheeraj';
// userName="manish"
// let age=29;

// age=30;

// function add(a:number,b:number){
// let result;
//     result= a+b;
//     return result;

// }


// const add=(a:number,b:number)=>{
//     let result;

//     result= a+b;
//     return result;
// }
// arrow function passing with default value
// const add=(a:number,b:number=5) => a+b;

// const printOut:(a:number| string)=>void=output=>console.log(output);
// printOut(add(6));


// spread operator

const hobbies=["reading","cooking"];
const activeHobbies=['Hiking'];
activeHobbies.push(...hobbies)

const person={
    fisrtName:"Dheeraj",
    age:28
}

let anotherObj={...person}

console.log(anotherObj)

//Rest Parameters...

const add = (...numbers:number[])=>{
return numbers.reduce((currentResult,currentvalues)=>{
    return currentResult+ currentvalues;
})

}

const addNumbers= add(2,3,4,5,6,7);

console.log(addNumbers);
//Array distructuring 
const [hobbie1,hobbie2,...remainingHobbies]=hobbies;

console.log(hobbie1)
console.log(hobbie2)
console.log(remainingHobbies)

// Object distructuring

let {fisrtName,age}=person;

console.log("fisrtName ::",fisrtName);

console.log("age ::",age);

