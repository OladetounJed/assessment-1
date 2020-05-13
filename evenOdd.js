let oddArray = [];
let evenArray = [];

for (let userId = 1; userId <= 100; userId++ ) {
  if (userId % 2 === 0 ) {
    evenArray.push(userId)
  }
  else {
    oddArray.push(userId)
  }
}

console.log(oddArray)
console.log(evenArray)
