var audiostart1 = new Audio('images/jarsofit.mp3');
var audiostart2 = new Audio('images/readmymind.mp3');
var audiostart3 = new Audio('images/Some.mp3');


function playStart() {
	stopSound()	
	if (rand == 0) {
		audiostart1.play();
	} 
	else if ( rand == 1){
		audiostart2.play();
	}
	else if ( rand == 2) {
		audiostart3.play();
	}
}

function stopSound() {
	audiostart1.pause();
	audiostart1.currentTime = 0;
	audiostart2.pause();
	audiostart2.currentTime = 0;
	audiostart3.pause();
	audiostart3.currentTime = 0;
}

rand = Math.floor(Math.random() * 3);
playStart();