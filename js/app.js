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

// get navbar__list element by its id and set to nav variable
const nav = document.getElementById("navbar__list");

// return all section elements in the document and set to section variable
const section = document.querySelectorAll("section");

// select all <a> tags in the document and set to variable scrollToSection
const scrollToSection = document.querySelectorAll("a");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * generateNav function gets data-nav and section id attributes, creates a <li> and appends newLi to nav for each section
 * sets inner HTML to an <a> with an id of nav-sectionId, href of #sectionID and data-link to sectionName
 * displays sectionName
 */

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

/** 
 * addActiveClass function checks each section's bounding coordinates and determines if it's in the viewport
 * if section is in viewport add class "your-active-section" to the section, else remove it
 * if section is in viewport add class "active-nav-link" to nav link, else remove it
 */

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

// for each <a> add a click event listener, prevent default behavior, select the href attribute of the link, smooth scroll to the element using scollIntoView when clicked
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
window.addEventListener("scroll", addActiveClass);


