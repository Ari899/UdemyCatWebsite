var catImage = document.querySelector('img');

catImageImage.onclick = function () {
    'use strict';
    var myImages = catImage.getAttribute('src');
    if (myImages === 'images/cat1.png"') {
        catImage.setAttribute('src', 'images/cat2.png');
    } else {
        catImage.setAttribute('src', 'images/cat1.png"');
    }
};
var nameButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    'use strict';
    var myName = window.prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Have a nice day, ' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Have a nice day, ' + storedName;
}
nameButton.onclick = function () {
    'use strict';
    setUserName();
};