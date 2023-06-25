import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";



gsap.registerPlugin(TextPlugin);
const layer = document.getElementById("layer");
window.addEventListener("mousemove", (e) => {
	layer.setAttribute(
		"style",
		`background: radial-gradient(600px at ${e.pageX}px ${e.pageY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
	);
});

let cursor = gsap.to("#cursor", { opacity: 0, ease: "power2.inOut", repeat: -1 });

const words = ["Programmer.", "Developer.", "Engineer.", "Student."];

let masterTl = gsap.timeline({ repeat: -1 });
words.forEach((word) => {
	let t1 = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
	t1.to("#text", { duration: 1, text: word });
	masterTl.add(t1);
});

// Get all the navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Function to check if an element is fully visible at the top of the viewport
function isFullyVisibleAtTop(element) {
  const elementRect = element.getBoundingClientRect();
  return elementRect.top >= 0 && elementRect.top <= window.innerHeight * 0.5;
}

// Function to handle scroll event
function handleScroll() {
  let activeLink = null;

  // Find the currently active link, if any
  navLinks.forEach(link => {
    const target = document.querySelector(link.hash);

    if (isFullyVisibleAtTop(target)) {
      activeLink = link;
    }
  });

  // Add the "active" class to the appropriate navigation link
  if (activeLink) {
	navLinks.forEach(link=>{
		link.classList.remove("active");
	})
    activeLink.classList.add('active');
  }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

// Add the "active" class to the appropriate navigation link on page load
window.addEventListener('load', handleScroll);




