//create empty set - done
// loop word - done
//make an var - done
// if letter in set, increment, else add -done
// return object - done

function frequencyCounter(word) {
  // Insert code here;
  
 let obj = Object.create(null);
  for(let i = 0; i < word.length; i++){
   let letter = word.charAt(i);
  if(obj[letter]){
  obj[letter]++;
  }
   else{
   obj[letter] = 1;
   }
  }
   return obj;
  }
/*let mapp = new Map();
  for(let i = 0; i < word.length; i++){
   let letter = word.charAt(i); 
    if(!(letter in mapp)){
      mapp.set(letter,1);
    }
    if(letter in mapp){
     mapp.set(letter,(mapp.get(letter))+1); 
      
    }
  }
  return mapp;
} 
*/
// Do not edit this line;
module.exports = frequencyCounter;
