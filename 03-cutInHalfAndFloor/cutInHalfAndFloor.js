function cutInHalfAndFloor(num) {
  // Insert code here;
  let cut;
  if( num % 2 == 1){
   cut = (num -1) / 2;
  }
  else{
    cut = num/2;
  }
  return cut;
}

// Do not edit this line;
module.exports = cutInHalfAndFloor;
