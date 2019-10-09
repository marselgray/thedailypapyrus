const m = new Date();
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const monthPrinted = months[m.getMonth()];;

const d = new Date();
const day = d.getDate();

const y = new Date();
const year = y.getFullYear();

const dates = document.getElementsByClassName('date');
for(let i = 0; i < dates.length; i++){
	dates[i].innerHTML = monthPrinted + ' ' + day + ', ' + year;
}

const race = document.getElementsByClassName('race');
let newYear;
if (year % 2 === 0){
	newYear = year;
} else{
	newYear = year + 1;
}
for(let i = 0; i < race.length; i++){
	race[i].innerHTML = 'The Race for ' + newYear;
}

function bodyToggle() {

	const checkBox = document.getElementById('switch');
	const body = document.getElementsByTagName('body')[0];
	const cards = document.getElementsByClassName('stories--card__item');
	const feature = document.getElementsByClassName('feature')[0];
	const opinion = document.getElementsByClassName('opinion')[0];

	if (checkBox.checked == true){
		body.style.background = "#26242E";
		feature.classList.add('shadow--light');
		opinion.classList.add('shadow--light');

		for(let i = 0; i < cards.length; i++){
			cards[i].classList.add('shadow--light');
		}

	} else {
		body.style.background = "#fff";
		feature.classList.remove('shadow--light');
		opinion.classList.remove('shadow--light');
		for(let i = 0; i < cards.length; i++){
			cards[i].classList.remove('shadow--light');
		}
	}
}