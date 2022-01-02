function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  
   let count = 0;
  for(let i = 0; i < arr.lenghth; i++){
    if(arr[i] == true || arr[i] == false || arr[i] instanceof String){
       count++;
    }
  }
    return count;
  
}


// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
