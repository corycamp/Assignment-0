function sumOfAllOddNumbers(nums) {
  // Insert code here;
  var total = 0;
  var count = 0;
  var arr = nums;

  while(count < arr.length){
  	if(arr[count] % 2 != 0)
  		total++;
  	count++;
  }
  return total;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;