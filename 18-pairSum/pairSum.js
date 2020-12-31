function pairSum(nums, target) {
  // Insert code here;
  var total = false;
  var numbers = nums;
  var test = target;

  if(numbers.length <= 1){
  	throw "the length of array is lower or equal to 1";
  }
  try{
  for(var i = 0; i < numbers.length; i++){
  	for(var j = i + 1; j < numbers.length; j++){
  		if(numbers[i] + numbers[j] == test)
  			total = true;
  	}
  }
}catch(e){
	console.error(e);
}
  return total;
}


// Do not edit this line;
module.exports = pairSum;