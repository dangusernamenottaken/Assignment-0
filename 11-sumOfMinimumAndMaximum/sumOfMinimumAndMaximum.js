function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let max = 0;
  let min = 0;
  let sum = 0;
  for(let i = 0; i < nums.length; i++){
   for(let j = i+1; j < nums.length; j++){
    if(nums[i]<=nums[j]){
       min = nums[i]; 
    }
    if(nums[i]>=nums[j]){
       max = nums[i];
    }
   }
  }
  sum = max + min;
  return sum;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
