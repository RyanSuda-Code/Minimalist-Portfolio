# Mobile Hamburger Menu – JavaScript Notes

## Overview
This JavaScript controls the **open and close behavior** of a mobile navigation menu using a hamburger button.

JavaScript is responsible for **interaction and state**, while CSS handles layout and styling.

---

## JavaScript Code

```js
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".nav-mobile");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});


Why JavaScript Is Needed
HTML provides structure only

CSS provides styling only

Neither can track interaction state

JavaScript allows the menu to stay open or closed after a click

How It Works (Step by Step)
1. Selecting Elements
js
Copy code
document.querySelector(".hamburger");
document.querySelector(".nav-mobile");
querySelector() selects elements from the DOM using CSS selectors

JavaScript needs:

a trigger element (hamburger button)

a target element (mobile navigation menu)

2. Listening for User Interaction
js
Copy code
hamburger.addEventListener("click", ...)
JavaScript is event-driven

The code runs only when the user clicks

Improves performance and control

3. Toggling Menu State
js
Copy code
mobileNav.classList.toggle("active");
toggle():

adds the class if it doesn’t exist

removes it if it already exists

One line handles both:

opening the menu

closing the menu


Relationship Between JavaScript and CSS
JavaScript does not change styles directly.

Instead, it adds or removes a class, and CSS reacts to that class.

Example:

css
Copy code
.nav-mobile {
  display: none;
}

.nav-mobile.active {
  display: block;
}
Why .active Is Used Instead of :active
:active only applies while clicking

The menu would close immediately after releasing the click

.active represents a persistent state

Mental Model
HTML → structure

CSS → appearance

JavaScript → behavior and state

JavaScript changes the class
CSS decides what that class means visually

Why This Pattern Is Common
Clean separation of concerns

Easy to maintain and scale

Easy to animate later

Standard practice in production code

###

 =====================================================
   Mobile Hamburger Menu – JavaScript Notes
 =====================================================

   PURPOSE:
   - Control the open / close state of the mobile navigation menu
   - JavaScript manages STATE, not styling
   - CSS decides how the menu looks when open or closed

   WHY JS IS NEEDED:
   - HTML = structure only
   - CSS = styling only
   - Neither can remember interaction state after a click
   - JavaScript tracks whether the menu is open or closed

   OVERALL FLOW:
   1. User clicks the hamburger button
   2. JavaScript detects the click event
   3. JavaScript toggles a class on the mobile nav
   4. CSS reacts to that class and updates visibility
===================================================== 


 -----------------------------------------------------
   1. Select required elements from the DOM
----------------------------------------------------- 

 Select the hamburger button (user interaction trigger)
 const hamburger = document.querySelector(".hamburger");

 Select the mobile navigation menu (element to open / close)
 const mobileNav = document.querySelector(".nav-mobile");


 -----------------------------------------------------
   2. Add click event listener to the hamburger
----------------------------------------------------- 

 JavaScript is event-driven.
 Nothing happens until the user clicks the hamburger.
 hamburger.addEventListener("click", () => {

   ---------------------------------------------------
     3. Toggle menu state using a CSS class
  --------------------------------------------------- 

   classList.toggle():
   - Adds 'active' if it does NOT exist
   - Removes 'active' if it DOES exist
  
   This single line handles:
   - Opening the menu
   - Closing the menu
  
   JavaScript does NOT change styles directly.
   It only changes class names.
   mobileNav.classList.toggle("active"); });


 -----------------------------------------------------
   IMPORTANT NOTES:
 -----------------------------------------------------
   - '.active' is a custom class representing STATE
   - It is NOT the same as the CSS ':active' pseudo-class
   - ':active' only works while clicking
   - '.active' persists after the click ends

   WHY THIS PATTERN IS USED:
   - Clean separation of concerns
   - Easy to maintain
   - Easy to animate later
   - Common in production and interviews
----------------------------------------------------- 