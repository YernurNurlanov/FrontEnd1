const form = document.getElementById('myForm');
form.addEventListener('submit', function (e) {
  const result = document.getElementById("result");
  if (result.textContent == "Congratulations!") {
    form.reset();
  } else {
    alert("Put the teams in the right order to submit your answers.");
    e.preventDefault();
  }
});
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
document.addEventListener('DOMContentLoaded', function () {
  showStep(1);
});
function showStep(stepNumber) {
  const steps = document.querySelectorAll('.step');
  steps.forEach(step => step.classList.remove('show'));

  const currentStep = document.querySelector(`.step[data-step="${stepNumber}"]`);
  currentStep.classList.add('show');
}
function nextStep(currentStep) {
	const fname = document.getElementById('fname').value;
	const city = document.getElementById('city').value;
	const age = document.getElementById('age').value;
	const number = document.getElementById('number').value;
	const telegram = document.getElementById('telegram').value;
	//Regexes for validation
	const nameCityRegex = /^[A-Za-z]+$/;
	const numberRegex = /^[0-9]{11}$/;
	const telegramRegex = /^@.+/;
	if(currentStep == 1 && !nameCityRegex.test(fname)) {
		alert('"Name" field must contains only letters');
		return;
	}
	else if (currentStep == 2 && !nameCityRegex.test(city)) {
		alert('"City" field must contains only letters');
		return;
	}
	else if (currentStep == 3) {
		if (isNaN(age) || age > 45 || age < 16) {
			alert('"Age" field must be 16-45');
			return;
		}
	}
	else if (currentStep == 4) {
		if (!numberRegex.test(number) || number[0] != 8 || number[1] != 7) {
			alert('"Number" field must contains 11 digits and starts with "87"');
			return;
		}
	}
	else if (currentStep == 5 && !telegramRegex.test(telegram)) {
		alert('"Telegram" field must starts with "@"');
		return;
	}
  showStep(currentStep + 1);
}
function prevStep(currentStep) {
  showStep(currentStep - 1);
}
// Game
const element1 = document.getElementById('element1');
const element2 = document.getElementById('element2');
const element3 = document.getElementById('element3');
const element4 = document.getElementById('element4');
const elements = [element1, element2, element3, element4];
const elementsValue = [element1.textContent, element2.textContent, element3.textContent, element4.textContent];
const result = document.getElementById('result');
const checkButton = document.getElementById('checkButton');
let correctOrder = ['Титан','Broke Boys','Эгриси','Fight Nights'];
elements.forEach((element, index) => {
	element.draggable = true;
	// EventListener
	element.addEventListener('dragstart', (e) => {
		e.dataTransfer.setData('id', element.textContent);
	});
	element.addEventListener('dragover', (e) => {
		e.preventDefault();
	});
	element.addEventListener('drop', (e) => {
		e.preventDefault();
		const draggedValue = e.dataTransfer.getData('id');
		const droppedValue = element.textContent;
		element.textContent = draggedValue;
		const itemId = elementsValue.indexOf(draggedValue);
		elements[itemId].textContent = droppedValue;
		elementsValue[index] = draggedValue;
		elementsValue[itemId] = droppedValue;
	});
});
// EventListener (click)
checkButton.addEventListener('click', () => {
	const currentOrder = Array.from(elements).map((el) => el.textContent);
	if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
		result.textContent = 'Congratulations!';
		result.style.color = 'green';
		result.style.display = 'block';
	} else {
		result.textContent = 'Keep going!';
		result.style.color = 'black';
		result.style.display = 'block';
	}
});