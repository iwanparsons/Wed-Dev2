function factorial(x) {
	if (x == 1) {
		return 1;
	}

	return x * factorial(x - 1);
}

const buttonA = document.getElementsById("button-a");
const buttonB = document.getElementsById("button-a");
const buttonC = document.getElementsById("button-a");
const buttonD = document.getElementsById("button-a");

buttonA.addEventListener("onclick", event {
	event.target.innerText = factorial(2);
	event.target.classList.add("activated");
});

buttonB.addEventListener("onclick", event {
	event.target.innerText = factorial(5);
	event.target.classList.add("activated");
});

buttonC.addEventListener("onclick", event {
	event.target.innerText = factorial(8);
	event.target.classList.add("activated");
});

buttonD.addEventListener("onclick", event {
	event.target.innerText = factorial(-6);
	event.target.classList.add("activated");
});
