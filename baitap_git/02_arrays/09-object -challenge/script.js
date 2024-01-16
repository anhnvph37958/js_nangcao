// step 1;
const library = [{
    title: 'the road ahead',
    author: 'Bill Gates',
    status: {
        own: true,
        reading: false,
        read: false,
    },
},
{
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
{
    title: 'Mockingjay',
    author: 'Suzanne côlins',
    status: {
        own: true,
        reading: false,
        read: false,
    },
},
];

// step2 
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// step 3
const { title: firstBook } = library[0];

console.log(firstBook);

/// step4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);