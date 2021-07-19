const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

console.log("Find Example: " + ages.find(checkAge));
console.log("Every Example: " + ages.every(checkAge))