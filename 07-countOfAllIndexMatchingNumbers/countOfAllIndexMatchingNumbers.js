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
  for(let i = 0; i < nums.length; i++){
   let numberFunction = num => Number(num);
    let strInt = Array.from(String(nums[i]),numberFunction);
    for(let j = 0; j < strInt.length; j++){
     for(let k = j+1; k <  strInt.length; k++){
         if(strInt[j]==strInt[k]{
            count++;
            }
     }    
    }
  }
  if(count == 0){
    return nums.length;
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
