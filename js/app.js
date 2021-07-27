/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// nav variable gets navbar__list element by its id
const nav = document.getElementById("navbar__list");

// section variable returns all section elements in the document
const section = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// generateNav function gets data-nav and section id attributes, creates a <li> and appends newLi to the nav for each section
// //set inner HTML to an <a> with an id of nav-sectionId, href of #sectionID and data-link to sectionName. Display sectionName
const generateNav = () => {
    section.forEach((section) => {
        const sectionName = section.getAttribute("data-nav");
        const sectionId = section.getAttribute("id");
        const newLi = document.createElement("li");
        nav.appendChild(newLi);
        newLi.innerHTML += `<a id="nav-${sectionId}" class="menu__link" href="#${sectionId}" data-link=${sectionName}">${sectionName}`;
    });
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
generateNav();

// add class 'active' to section when near top of viewport

// get bounding coordinates for each section
const getSectionBounding = (section) => {
    const sectionPosition = section.getBoundingClientRect();
    return sectionPosition;
}

// function to check each section's bounding coordinates and determine if it's in the viewport
// if section is in viewport add class "your-active-section" else remove it
// if section is in viewport add class "active-nav-link" to nav link else remove it
const addActiveClass = () => {
    section.forEach((section) => {
        if (getSectionBounding(section).top < 150 && getSectionBounding(section).top >= -150) {
            let navId = section.getAttribute("id");
            document.querySelector(`a#nav-${navId}`).classList.add("active-nav-link");
            section.classList.add("your-active-class");
        } else {
            let navId = section.getAttribute("id");
            document.querySelector(`a#nav-${navId}`).classList.remove("active-nav-link");
            section.classList.remove("your-active-class");
        }
    });
};

// Scroll to anchor ID using scrollTO event

const scrollToSection = document.querySelectorAll("a");

scrollToSection.forEach((link) =>
    link.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    })
);


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click


// Set sections as active
window.addEventListener('scroll', addActiveClass);


