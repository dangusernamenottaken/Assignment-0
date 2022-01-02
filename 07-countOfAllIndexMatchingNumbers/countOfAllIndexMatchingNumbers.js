function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
   let count = 0;
  let counting = 0;
  let counts = 0;
  let y = 0;
  for(let i = 0; i < nums.length; i++){
    for(let j = i+1; j < nums.length; j++){
     if(nums[i]==nums[j]){
      count++;
       let x = nums[i];
       for(let k = 0; k< nums.length; k++{
        if(nums[k] = x)
       {
         counting++;
         
       }
       }
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
            
             y = strInt[j];
       for(let w = 0; w< strInt.length; w++{
        if(strInt[w] = y)
       {
         counts++;
         if(counts >= 2){
          count = (count - counts) + 1;
         }
       }
       }
         }
     }    
    }
    counts = 0;
  }
  if(count == 0){
    return nums.length;
  }
if(counting >= 2){
          count = (count - counting) + 1;
         }

  return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
