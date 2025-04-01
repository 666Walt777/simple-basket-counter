let homescore = 0;
let home = document.getElementById("HOME");
let guestscore = 0;
let guest = document.getElementById("GUEST");

function home1() {
    homescore += 1;
    home.innerText = homescore;
}

function guest1() {
    guestscore += 1;
    guest.innerText = guestscore;
}

function home2() {
    homescore += 2;
    home.innerText = homescore;
}

function guest2() {
    guestscore += 2;
    guest.innerText = guestscore;
}

function home3() {
    homescore += 3;
    home.innerText = homescore;
}

function guest3() {
    guestscore += 3;
    guest.innerText = guestscore;
}

function clean() {
    homescore = 0; 
    guestscore = 0; 
    home.innerText = homescore; 
    guest.innerText = guestscore; 
}
