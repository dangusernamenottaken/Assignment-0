function frequencyCounter(word) {
  // Insert code here;
  let mapp = new Map();
  for(let i = 0; i < word.length; i++){
   let letter = string.charAt(i); 
    if(!(letter in mapp)){
      mapp.set(letter,1);
    }
    if(letter in mapp){
     mapp.set(letter,(mapp.get(letter))+1); 
      
    }
  }
  return mapp;
}

// Do not edit this line;
module.exports = frequencyCounter;
