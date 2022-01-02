function fizzBuzz(start, end) {
  // Insert code here;
  let arrFizzBuzz = [];
  let arrLength = (end - start) + 1;
  for(let i = 0; i < arrLength; i++){
      arrFizzBuzz[i] = i+1;
    if(arrFizzBuzz[i]%3 == 0 && arrFizzBuzz[i]%5 == 0){
       arrFizzBuzz[i] = "FizzBuzz";
      
    }
    else if(arrFizzBuzz[i]%3 == 0){
      arrFizzBuzz[i] = "Fizz";
      
    }
    
    else if(arrFizzBuzz[i]%5== 0){
       arrFizzBuzz[i] = "Buzz";
      
    }
  }
  return arrFizzBuzz;
}

// Do not edit this line;
module.exports = fizzBuzz;
