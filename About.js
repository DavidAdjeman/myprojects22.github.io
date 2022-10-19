console.log('The Stub ACCRA built by David Adjeman');


// Javascript for Nav bar toggler on small screen 
let navLinks = document.getElementById('navLinks');

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-270px";
}