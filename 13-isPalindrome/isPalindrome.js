function isPalindrome(word) {
  // Insert code here;
  var ans = "";
  var palindrome = false;

  for(var i = word.length - 1; i >= 0; i--){
  	ans+= word.charAt(i);
  }

if(ans == word)
	palindrome = true;

return palindrome;
}

// Do not edit this line;
module.exports = isPalindrome;