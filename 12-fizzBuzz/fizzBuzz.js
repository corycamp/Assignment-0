function fizzBuzz(start, end) {
  // Insert code here;
  var counter = 0;
  var count = start;
  var arr = [];
  while(count <= end){
  	if(count % 3 == 0 && count % 5 != 0){
  		arr[counter] = "Fizz";
  		counter++;
  	}
  	else if(count % 5 == 0 && count % 3 !=0){
  		arr[counter] = "Buzz";
  		counter++;
  	}
  	else if(count % 3 == 0 && count % 5 == 0){
  		arr[counter] = "FizzBuzz";
  		counter++;
  	}
  	else{
  		arr[counter] = count;
  		counter++;
  	}
  	count++;
  }
  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;