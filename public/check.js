function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;

	var correct = 0;


	if (question1 == "28") { //Question 1's answer ,
		correct++; //If got correct increases score by 1
}
	if (question2 == "4") { // Question 2's answer
		correct++; //If got correct increases score by 1
}	
	if (question3 == "78") { //Question 3's answer
		correct++; //If got correct increases score by 1
	}

	if (question4 == "96") { //Question 4's answer
		correct++; //If got correct increases score by 1

	}

	if (question5 == "Clark Kent") { //Question 5's answer
	correct++; //If got correct increases score by 1

	}

	if (question6 == "Dodgeball") { //Question 6's answer
		correct++; //If got correct increases score by 1

	}
	if (question7 == "The Silence") { //Question 7's answer
		correct++; //If got correct increases score by 1

	}
	if (question8 == "A Holy Month") { //Question 8's answer
		correct++; //If got correct increases score by 1

	}
	if (question9 == "1977") { //Question 9's answer
		correct++; //If got correct increases score by 1
	}

	if (question10 == "baby"|| question10 == "Baby") { //Question 10's answer
		correct++; //If got correct increases score by 1
	}
	







	//check.js into public 
	//include in script tag
	
	//var pictures = ["public/win.gif", "public/meh.jpeg", "public/lose.gif"]; //Images based on their score
	var messages = ["WOW! You're Smart", "So close", "I have seen better", "Go back to school","Try Harder","Try Harder","Try Harder","Try Harder","Try Harder","Try Harder","Try Harder", "Try Harder"]; //The feedback after their 
	//scores are revealed
	var score;

	//If statements to tally the users score
	
	
	if (correct == 10) {
		score = 0;
	}

	if (correct == 9) {
		score = 1;
	}

	if (correct == 8) {
		score = 2;
	}

	if (correct == 7) {
		score = 3;
	}
	if(correct == 6) {
		score = 4;
	}

	if (correct == 5) {
		score = 5;
	}

	if (correct == 4) {
		score = 6;
	}

	if (correct == 3) {
		score = 7;
	}
	if (correct == 2) {
		score = 8;
	}
	if (correct == 1) {
		score = 9;
	}
	if (correct == 0) {
		score = 10;
	}
	



	document.getElementById("after_submit").style.visibility = "visible";
	//What is displayed after they submit
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	//document.getElementById("picture").src = pictures[score];
	}
