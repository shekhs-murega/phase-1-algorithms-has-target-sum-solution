function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set();
  for (const num of array) {
    const difference = target - num;

    if (seenNumbers.has(difference)) {
      return true;
    }

    seenNumbers.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  Create an empty set to keep track of numbers we have seen so far.
Iterate through the array of integers.
Calculate the difference between the target and the current number.
Check if the difference exists in the set. If it does, return true because we found a pair that adds up to the target.
Otherwise, add the current number to the set.
If we finish iterating through the array without finding a pair, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // Expecting: true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25));   // Expecting: true
console.log(hasTargetSum([1, 2, 5], 4));             // Expecting: false
console.log(hasTargetSum([-7, 10, 4, 8], 3));         // Expecting: true
console.log(hasTargetSum([1, 2, 3, 4], 5));           // Expecting: true
console.log(hasTargetSum([2, 2, 3, 3], 4));           // Expecting: true
console.log(hasTargetSum([4], 5));                    // Expecting: false

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
