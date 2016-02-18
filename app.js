
//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");

//listen for the keydown event
body.onkeydown = function(e){
    //e.keyCode - will capture the key codes
    displayMessage(e.keyCode);
}

var keyCodeName = function(keyCode){
	if (keyCode === 40) {
		return "down";	
	}
	else if(keyCode === 38){
		return "up";
	}
		else if(keyCode === 37){
			return "left";
		}
			else if(keyCode === 39){
				return "right";
			}
	else{
		return "";
	}
}

var createLotiotionClass = function(){



}