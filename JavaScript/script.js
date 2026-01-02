const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".nav-mobile");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  hamburger.classList.toggle("active");
});


/* =====================================================
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
===================================================== */


/* -----------------------------------------------------
   1. Select required elements from the DOM
----------------------------------------------------- */

// Select the hamburger button (user interaction trigger)
// const hamburger = document.querySelector(".hamburger");

// Select the mobile navigation menu (element to open / close)
// const mobileNav = document.querySelector(".nav-mobile");


/* -----------------------------------------------------
   2. Add click event listener to the hamburger
----------------------------------------------------- */

// JavaScript is event-driven.
// Nothing happens until the user clicks the hamburger.
// hamburger.addEventListener("click", () => {

  /* ---------------------------------------------------
     3. Toggle menu state using a CSS class
  --------------------------------------------------- */

  // classList.toggle():
  // - Adds 'active' if it does NOT exist
  // - Removes 'active' if it DOES exist
  //
  // This single line handles:
  // - Opening the menu
  // - Closing the menu
  //
  // JavaScript does NOT change styles directly.
  // It only changes class names.
  // mobileNav.classList.toggle("active"); });


/* -----------------------------------------------------
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
----------------------------------------------------- */
