function hasTargetSum(array, target) {
  const complementSet = new Set();

  for (let num of array) {
    const complement = target - num;
    if (complementSet.has(complement)) {
      return true;
    }
    complementSet.add(num);
  }

  return false;
}

/* Write your algorithm here
1. define the function hasTargetSum with two parameters: arr (an array of integers) and target (the target integer).
2. Create an empty set called visitedNumbers to store the numbers we have encountered in the array.
3. Iterate through each number (num) in the array:
    - Calculate the difference by subtracting num from the target.
    - Check if the difference is already in the visitedNumbers set:
        - If it is, return true since we have found a pair that adds up to the target.
    - Add the current num to the visitedNumbers set.
4. If the loop completes without finding a pair, return false since no pair adds up to the target.

/* 
  Write the Big O time complexity of your function here
  The time complexity of the hasTargetSum function is O(n), where n is the size of the input array.
*/

/* 
  Add your pseudocode here
  1. define the function hasTargetSum with two parameters: arr (an array of integers) and target (the target integer).
2. Create an empty set called visitedNumbers to store the numbers we have encountered in the array.
3. Iterate through each number (num) in the array:
    - Calculate the difference by subtracting num from the target.
    - Check if the difference is already in the visitedNumbers set:
        - If it is, return true since we have found a pair that adds up to the target.
    - Add the current num to the visitedNumbers set.
4. If the loop completes without finding a pair, return false since no pair adds up to the target.

*/

/*
  Add written explanation of your solution here
  The pseudocode provides a high-level description of the steps involved in the hasTargetSum function.
   It outlines the necessary actions to check if any pair of numbers in the array adds up to the target.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
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
