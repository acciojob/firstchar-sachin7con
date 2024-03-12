function firstChar(text) {
  //SGN your code here
	let firstC = ""; 
	for (let i = 0; i < text.length; i++) {
		if(text.charAt(i) != 0){
			firstC +=  text.charAt(i);
			
			break;
		}else{
			firstC =  "";
		}
	} return firstC;
}


// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
