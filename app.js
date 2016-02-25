
//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");

var taxiLocationCounter = 1;



function keyCodeName(keyCode){
 
	if (keyCode === 40) {
		var downKeyCodeName = 'down';
		return downKeyCodeName;	
	}
	else if(keyCode === 38){
		var upKeyCodeName = 'up';
		return upKeyCodeName;
	}
			else if(keyCode === 37){
			var leftKeyCodeName = "left";
			return leftKeyCodeName;
		}
			else if(keyCode === 39){
				var rightKeyCodeName = "right";
				return rightKeyCodeName;
			}
	else{
		return "";
	};
};

//listen for the keydown event
body.onkeydown = function(e){
    //e.keyCode - will capture the key codes
    console.log(e.keyCode)
    displayMessage(e.keyCode);
    moveForward()
}

var createLocationClass = function(number){

				if (number === 1 ) {
					return 'slot-one-of-nine';	
				};
					if (number === 2) {

						return 'slot-two-of-nine';	
					} 
						else if (number === 3) {

							return 'slot-three-of-nine';	
						} 
							else if (number ===  4) {

								return 'slot-four-of-nine'; 
							};
					if (number ===  5) {

						return 'slot-five-of-nine';	
					};
				if (number === 6)  {

					return 'slot-six-of-nine';	
				};
			 if (number === 7) {

				return 'slot-seven-of-nine'
			}
		else if (number === 8) {

			return 'slot-eight-of-nine'; 
		};
	if (number === 9) {

		return 'slot-nine-of-nine';
	};

}

var createTrafficLightClass = function(number){

				if (number === 1) {
					return 'slot-one-of-nine';	
				};
					if (number === 2) {

						return 'slot-two-of-nine';	
					} 
						else if (number === 3) {

							return 'slot-three-of-nine';	
						} 
							else if (number ===  4) {

								return 'slot-four-of-nine'; 
							};
					if (number ===  5) {

						return 'slot-five-of-nine';	
					};
				if (number === 6)  {

					return 'slot-six-of-nine';	
				};
			 if (number === 7) {

				return 'slot-seven-of-nine'
			}
		else if (number === 8) {

			return 'slot-eight-of-nine'; 
		};
	if (number === 9) {

		return 'slot-nine-of-nine';
	};
};

var moveForward = function() {

	var currentLocation = createLocationClass(taxiLocationCounter)
		taxiLocationCounter = taxiLocationCounter + 1;

	var newLocation = createLocationClass(taxiLocationCounter)
		moveTaxi(currentLocation,newLocation)
};
