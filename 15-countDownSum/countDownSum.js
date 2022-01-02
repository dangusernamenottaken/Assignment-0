class MySolution {
  countDownSum(num) {
    // Insert code here;
    if(num == 0)
    {
      return 1;
    }
    else{
     return num +  countDownSum(num-1);
    }
    
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
