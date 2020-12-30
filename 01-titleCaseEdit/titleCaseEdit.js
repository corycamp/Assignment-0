function titleCaseEdit(title) {
  // Insert code here;
  var pieces = title.split(" ");
  var whole = "";
  for(var i = 0; i < pieces.length; i++)
  {
  	if(i < pieces.length -1)
  	var word = pieces[i].charAt(0).toUpperCase() + pieces[i].slice(1, pieces[i].length + 1) + " ";
  	else
  	var word = pieces[i].charAt(0).toUpperCase() + pieces[i].slice(1, pieces[i].length + 1);
    whole += word;
  }
  
  return whole;
}

// Do not edit this line;
module.exports = titleCaseEdit;