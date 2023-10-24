const accountId = 4554;
var age = 22;
let name = "nrr";
city = "Indore";

console.log(accountId);
console.log(age);
console.log(name);
console.log(city);

// accountId = 111; // const can't be override
age = 45;
name = "mrr";
city = "Bhopal";

console.table([accountId,age, name, city]);