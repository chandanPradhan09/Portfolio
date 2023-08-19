import Typed from "typed.js";

const typed = new Typed("#element", {
	strings: ["Programmer.", "Developer.", "Software Engineer.", "Student."],
	typeSpeed: 100,
	loop: true,
	loopCount: Infinity,
	showCursor: true,
	cursorChar: "_",
	backDelay: 700,
});

const layer = document.getElementById("layer");
window.addEventListener("mousemove", (e) => {
	layer.setAttribute(
		"style",
		`background: radial-gradient(600px at ${e.pageX}px ${e.pageY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
	);
});

// Get all the navigation links
const navLinks = document.querySelectorAll("nav ul li a");

// Function to check if an element is fully visible at the top of the viewport
function isFullyVisibleAtTop(element) {
	const elementRect = element.getBoundingClientRect();
	return elementRect.top >= 0 && elementRect.top <= window.innerHeight * 0.5;
}

// Function to handle scroll event
function handleScroll() {
	let activeLink = null;

	// Find the currently active link, if any
	navLinks.forEach((link) => {
		const target = document.querySelector(link.hash);

		if (isFullyVisibleAtTop(target)) {
			activeLink = link;
		}
	});

	// Add the "active" class to the appropriate navigation link
	if (activeLink) {
		navLinks.forEach((link) => {
			link.classList.remove("active");
		});
		activeLink.classList.add("active");
	}
}

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);

// Add the "active" class to the appropriate navigation link on page load
window.addEventListener("load", handleScroll);
