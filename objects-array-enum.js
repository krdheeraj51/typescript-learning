"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Dheeraj Kumar",
    age: 28,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN,
};
// person.role.push('admin');
// person.role[1]=10;
let favouriteActivities;
favouriteActivities = ["sports", "cooking"];
for (const hobby of person.hobbies) {
    console.log(hobby);
}
if (person.role === Role.ADMIN) {
    console.log("is admin role");
}
