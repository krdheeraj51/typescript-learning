/**
 * interface inheritance 
 */

interface Named{
readonly name:string;

}

interface Greetable extends Named{
  // name:string;
  age:number;
  greet(phrase: string):void
}


/**
 * Classes implements interface 
 */
class Person implements Greetable{
  name: string;
  age=30;
  constructor(n:string){
    this.name=n
  }
  greet(phrase:string){
    console.log(phrase +' '+this.name)
    
  }
}

let user1:Greetable;
user1={
name:'Max',
age:15,
greet(phrase:string){
  console.log(phrase +''+this.name);
}
}
user1.greet('Hi there I am -')