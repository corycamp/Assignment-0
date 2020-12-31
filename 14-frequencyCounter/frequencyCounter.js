function frequencyCounter(word) {
  // Insert code here;
  var done = [];
  var arr = {};
  var tracker = 0;
  var counter = 0;
  var check = false;

  for(var i = 0; i < word.length; i++){
  	check = false;
  	counter = 0;
  	if(done != null){
  		for(var count = 0; count < done.length; count++){
  			for(var j = i; j < done.length + 1; j++){
  				if(done[count] == word.charAt(j))
  					check = true;
  			}
  		}
  	}
  	if(check == false){
  		done[i] = word.charAt(i);
  		for(var j = i; j < word.length; j++){
  			if(done[i] == word.charAt(j))
  				counter++;
  		}
  		arr[done[i]] = counter;
  	}
  }

return arr;
}

// Do not edit this line;
module.exports = frequencyCounter;