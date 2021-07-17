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
        const sectionId = section.getAttribute('id');
        // Create a <li>
        const newLi = document.createElement("li");
        // Append newLi to nav
        nav.appendChild(newLi);
        //set inner HTML to an <a> with href to sectionID and data-link to sectionName. Display sectionName
        newLi.innerHTML += `<a class="menu__link" href="#${sectionId}" data-link=${sectionName}">${sectionName}`;

        console.log(nav);
        console.log(newLi);
        console.log(sectionName);
    })
}

generateNav();


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


