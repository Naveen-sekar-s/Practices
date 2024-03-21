// JavaScript objects are written with curly braces {}.

// Object properties are written as name:value pairs, separated by commas.

//eg 1
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
console.log(person.firstName);
console.log(typeof person);

//eg 2
const person2 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.id);
