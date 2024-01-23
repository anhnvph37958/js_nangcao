let output;

output = document.all;
output = document.all[11];
output = document.all.length;

// everything in the html tags
output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children;

//random properties 
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

//get all froms 
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// change a form id 
document.forms[0].id = 'new-id';
// Get all links
// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

// get all images 
output = document.images;
output = document.images[0];
output = document.images[0].src;

// Turn an HTMLCollection into an array
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);
