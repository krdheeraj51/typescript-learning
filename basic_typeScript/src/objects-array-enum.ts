// const person:
// {
// name:string,
// age:number
// }
// const person :{
//     name:string,
//     age:number;
//     hobbies:string[];
//     role:[number,string]
// }= {
//   name: "Dheeraj Kumar",
//   age: 28,
//   hobbies: ["sports", "cooking"],
//   role:[2,'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Dheeraj Kumar",
  age: 28,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};
// person.role.push('admin');
// person.role[1]=10;
let favouriteActivities: string[];
favouriteActivities = ["sports", "cooking"];

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.ADMIN) {
  console.log("is admin role");
}
