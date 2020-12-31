function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  var product = 1;

  for(var num of args){
  	product *= num;
  }

  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;