//create empty set - done
// loop word - done
//make an var - done
// if letter in set, increment, else add -done
// return object - done

function frequencyCounter(word) {
  // Insert code here;
  // var frequency = {};
  // for(var i = 0; i < word.length; i++){
  // let letter = word.charAt(i);
  // if(frequency[letter]){
  // frequence[letter]++;
  // else{
  // frequence[letter] = 1;
  // }
  //}
  // return frequency;
  //}
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
