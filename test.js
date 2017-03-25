var name;
var selectedFile;
function getName(){
	name = $("#firstname")[0].value + " " + $("#lastname")[0].value;
	console.log(name);
	selectedFile = $("#javafile")[0].files[0];
	console.log(selectedFile);
}
