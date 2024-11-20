//1. 

const person = {
    name: "Alice",
    age: 25,
    country: "USA"
};
for (keys in person) {
    console.log(`${keys}:${person[keys]}`)
}

//2.

const numbers = [10, 20, 30, 40, 50];
sum = 0;
for (vals of numbers) {
    sum = sum + vals;
}
console.log(sum)

//3.

const person1 = {
    name : "Alice",
    age : 25
};
Object.freeze(person1);
console.log(person1);
person1.name = "john";
person1.age = 30;
console.log(person1)  //No changes can be made as freeze method is applied before

//4.

const person2 = {
    name : "Alice"
};
Object.seal(person2);
console.log(person2);
person2.name = "John";
console.log(person2);
person2.age = 25;
console.log(person2)  //using seal method we can avoid adding new properties but we can update the object

//5.

const person4 = {
    name : "Alice",
    age : 25,
    country : "USA"
};
let prop = Object.keys(person4);
console.log(prop);
//6.
let value = Object.values(person4);
console.log(value);

//7.
const person5 = {
    name : "Alice",
    age : 25,
};
let arr = Object.entries(person5);
console.log(arr)

//8.

const student = {
    name : "John",
    subjects : {
        math : 90,
        english : 85
    }
};
for(prop in student){
    console.log(`${prop} : ${student[prop]}`)
   
}
// for(props in subjects){
//     console.log(`${props} : ${subjects[props]}`)
// }


//9.

const students = {
    name : "John",
    age : 25,
    subject : "Math"
};
for(obj in students){
    console.log(`${obj} : ${students[obj]}` )  
}
vals = Object.values(students).forEach((values)=>console.log(values));

//10.

const pers = {
    name : "Alice"
};
Object.freeze(pers);
console.log(pers);
pers.age = 20;
console.log(pers)
pers.name = "John";
console.log(pers)








