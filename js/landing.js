function isInViewport(element) {
	// currently only checks top and bottom
	const rect = element.getBoundingClientRect();
	console.log(rect);
	return (
		(rect.top >= 0 &&
			rect.top <
				(window.innerHeight || document.documentElement.clientHeight)) ||
		(rect.bottom >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight))
		// rect.left >= 0 ||
		// rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

let showNavbar = () => {
	let navbar = document.getElementById("vertical-navbar");
	navbar.style.transform = "translate(0px)";
}

let hideNavbar = function() {
	let navbar = document.getElementById("vertical-navbar");
	if (!navbar.matches(':hover')) {
		navbar.style.transform = `translate(-${navbar.offsetWidth}px)`;
	}
}

banner = document.getElementById("bannerContainer");
console.log(banner);

let lastPageOffset = 0;

window.addEventListener("scroll", (event) => {
	let scrollTop =
		window.pageYOffset !== undefined
			? window.pageYOffset
			: (document.documentElement || document.body.parentNode || document.body)
					.scrollTop;
	console.log(scrollTop);

	let firstSection = document.getElementById("section-1");
	console.log(isInViewport(firstSection));

	// deprecated: hides by percentage of offset from landing section
	// let percentMovedOff = Math.min(Math.abs(firstSection.getBoundingClientRect().top/window.innerHeight), 1)
	// let duckAmount = navbar.offsetWidth * percentMovedOff;
	// navbar.style.transform = `translate(-${duckAmount}px)`;

	let idempotency = false;

	if (scrollTop - lastPageOffset > 0) {
		console.log("scroll down");
		hideNavbar();
	} else {
		console.log("scroll up");
		showNavbar();
	}

	lastPageOffset = scrollTop;
});

// additional comfort feature to close navbar if clicked outside of it
window.addEventListener("click", function (e) {
	let navbar = document.getElementById("vertical-navbar");

	if (navbar.contains(e.target)) {
		console.log("inside navbar");
	} else {
		navbar.style.transform = `translate(-${navbar.offsetWidth}px)`;
		console.log("outside navbar");
	}
});

// currently not working...
function isWithin(mouseX, mouseY, element) {
	box = element.getBoundingClientRect()
	let [x1, x2, y1, y2] = [box.left, box.right, box.top, box.bottom];

	if (mouseX > box.left+200 && mouseX < box.right+200 && mouseY > box.bottom && mouseY < box.top)
		return true;
	return false;
}


// another comfort features where on mousemove, reveal navbar if within it's bounding box
window.addEventListener("mousemove", function(e) {
	let navbar = document.getElementById("vertical-navbar");
	if (isWithin(e.clientX, e.clientY, navbar)) {
		console.log("WITHIN")
	} else {
		console.log("OUTSIDE");
	}
});

// another comfort feature, if idle for more than 3.5 seconds, autohide navbar
let inactivityTime = function () {
	let time;

	function logout() {
    // check not currently hovering on navbar
			hideNavbar();
	}

	function resetTimer() {
		clearTimeout(time);
		if (window.pageYOffset > 0) // so if we are exactly on landing page, persist menu
			time = setTimeout(logout, 2000);
		// 1000 milliseconds = 1 second
	}

	window.addEventListener("load", resetTimer, true);
	let events = ["mousedown", "keypress", "scroll", "touchstart"]; // took out "mousemove"
	events.forEach(function (name) {
		document.addEventListener(name, resetTimer, true);
	});
};

inactivityTime();

