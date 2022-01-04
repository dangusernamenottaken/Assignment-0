function fizzBuzz(start, end) {
  // Insert code here;

  let arrFizzBuzz = [];
  let arrLength = (end - start)+1;
  let count = start;
  for(let i = 0; i < arrLength; i++){
      //count = start;
    arrFizzBuzz[i] = count;
    count++;
     
      
    if(arrFizzBuzz[i]%15 === 0){
       arrFizzBuzz[i] = "FizzBuzz";
      
    }
    else if((arrFizzBuzz[i]%3) == 0){
      arrFizzBuzz[i] = "Fizz";
      
    }
    
    else if((arrFizzBuzz[i]%5)== 0 ){
       arrFizzBuzz[i] = "Buzz";
      
    }
    
      }
  return arrFizzBuzz;
}

// Do not edit this line;
module.exports = fizzBuzz;
