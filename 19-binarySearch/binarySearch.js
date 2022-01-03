class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
   let start = 0;
   let end = nums.length-1;
    while(start <= end){
     let middle = Math.floor((start+end)/2);
      if(nums[middle]==target){
         return true; 
      }
      else if(nums[middle]<target){
        start = middle + 1;
      }
      
      else{
        end = middle - 1;
      }
    }
    return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
