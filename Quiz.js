let q1 = null;
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');
const q4 = document.getElementById('q4');
const q5 = document.getElementById('q5');
const q6 = document.getElementById('q6');
const q7 = document.getElementById('q7');
const q8 = document.getElementById('q8');
const q9 = document.getElementById('q9');
const q10 = document.getElementById('q10');
const result = document.getElementById('result');

const form = document.getElementById('quizForm');
form.addEventListener('submit', function (e) {
  let sum = 0;
	if (q1 == "Amkal"){
		sum++;
	}
	if (q2.value == 5){
		sum++;
	}
	if (q3.value == 2022){
		sum++;
	}
	if (q4.value == 24){
		sum++;
	}
	if (q5.value == "Titan"){
		sum++;
	}
	if (q6.value== "Osipov"){
		sum++;
	}
	if (q7.value == 22){
		sum++;
	}
	if (q8.value == "Nikifilini Otaku"){
		sum++;
	}
	if (q9.value == 4){
		sum++;
	}
	if (q10.value == 5){
		sum++;
	}
	result.textContent = 'You answered '+sum+' questions correctly';
	e.preventDefault();
});

function ans(Val) {
	q1 = Val;
}

//Increase weight of button
function increaseFontWeight() {
	const button = document.getElementById("myButton");
	button.style.fontWeight = "bold";
}
//Reset weight of button
function resetFontWeight() {
	const button = document.getElementById("myButton");
	button.style.fontWeight = "normal";
}