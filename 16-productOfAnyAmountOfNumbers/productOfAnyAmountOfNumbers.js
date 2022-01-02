function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let product = 1;
  let argsArray = Array.from(args);
  for(let i = 0; i < args.length; i++){
      product*= args[i];
  }
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
