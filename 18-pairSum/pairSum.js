function pairSum(nums, target) {
  // Insert code here;
  for(let i =0; i < nums.length; i++){
   for(let j = i+1; j < nums.length; j++){
     if((nums[i]+nums[j]) == target){
      return true; 
     }
     else {
       return false;
     }
   }
  }
}

// Do not edit this line;
module.exports = pairSum;
