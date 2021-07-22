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

// nav variable gets navbar_list element id
const nav = document.getElementById("navbar__list");

// section variable selects each section element
const section = document.querySelectorAll("section");
console.log(nav);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const generateNav = () => {
    section.forEach((section) => {
        // get data-nav attribute and set it to sectionName variable
        const sectionName = section.getAttribute("data-nav");
        // get section id attribute and set to sectionId variable
        const sectionId = section.getAttribute("id");
        // create a <li>
        const newLi = document.createElement("li");
        // append newLi to nav
        nav.appendChild(newLi);
        //set inner HTML to an <a> with href to sectionID and data-link to sectionName. Display sectionName
        newLi.innerHTML += `<a id="nav-${sectionId}" class="menu__link" href="#${sectionId}" data-link=${sectionName}">${sectionName}`;

        // console.log(nav);
        // console.log(newLi);
        // console.log(sectionName);
    })
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
    // console.log(sectionPosition)
    return sectionPosition;
}

// function to check each section's coordinates and determine if it's in the viewport
// if section is in viewport add class "your-active-section" else remove class "your-active section"
const addActiveClass = () => {
    section.forEach((section) => {
        if (getSectionBounding(section).top < 100 && getSectionBounding(section).top >= -100) {
            // add active-nav-link class to nav link
            let navId = section.getAttribute("id");
            console.log(navId);
            document.querySelector(`a#nav-${navId}`).classList.add("active-nav-link");
            // add your-active-class to section
            section.classList.add("your-active-class");
        } else {
            // remove active-nav-link class from inactive nav link
            let navId = section.getAttribute("id");
            document.querySelector(`a#nav-${navId}`).classList.remove("active-nav-link");
            // remove your-active-class from section
            section.classList.remove("your-active-class");
        }
    });
};


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
window.addEventListener('scroll', addActiveClass);
// window.addEventListener('scroll', addActiveNav);

