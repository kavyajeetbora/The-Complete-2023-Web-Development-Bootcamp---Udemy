// change the class of the button to invisible
document.querySelector('button').classList.add('invisible');

// remove the class
document.querySelector('button').classList.remove('invisible');

// toggle the class
document.querySelector('button').classList.toggle('invisible');


// Change the Font size
document.querySelector('h1').classList.toggle('huge');

// get the textContent
document.querySelector("ul").textContent; // The text content gives only the text excluding the html tags
// whereas the inner html method returns the everything inside a tag including the html tags

// get and set the attribute property of an elements
document.querySelector('a').getAttribute('href');
document.querySelector('img').setAttribute('src', 'https://www.fcbarcelona.com/photo-resources/2022/11/02/b6748d23-c5f6-47d2-8cc2-9fcebff5e0a1/mini_08-PEDRI.png?width=670&height=790');

// List all the attributes of an element:
document.querySelector('a').attributes;