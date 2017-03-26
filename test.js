var name;
var selectedFile;
function getName(){
	name = $("#firstname")[0].value + " " + $("#lastname")[0].value;
	console.log(name);
	selectedFile = $("#javafile")[0].files[0];
	console.log(selectedFile);
	var reader = new FileReader();
	var text;
	var variableSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	reader.onload = function(e) {
		
		//console.log(reader.result);
		var textName = reader.result.replace("Jessica Jiang", name);
		console.log(textName);
		
		
		//next stuff here
		var textVariables = replaceVariables(textName, variableSet);
		console.log(textVariables);
	}
	reader.readAsText(selectedFile);

}

function replaceVariables(originalText, variableSet) {
	var index = 0;
	var newText = originalText;
	var pieces = originalText.split("  int ");
	for(var i = 1; i< pieces.length; i++){
		var varName = pieces[i].substring(0, pieces[i].indexOf(" "));
		console.log(varName);
		if(varName.length > 1)
		{
			newText = replaceAll(newText, varName, variableSet[index] );
			console.log(newText);
			index++;
			if (index >= variableSet){
				index=0;
			}
		}
		
	}
	return newText;
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function removeVowels(str){
	var vowels = ["a", "e", "i", "o", "u"];
	var newStr = str;
	for(vowel in vowels){
		newStr = newStr.replace(vowel, "");
	}
	if(newStr.length == 0){
		return str;
	}
	else{
		return newStr;
	}
}