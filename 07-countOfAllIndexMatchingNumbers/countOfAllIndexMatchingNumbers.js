function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
   let count = 0;
  for(let i = 0; i < nums.length; i++){
    for(let j = i+1; j < nums.length; j++){
     if(nums[i]==nums[j]){
      count++; 
     }
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
