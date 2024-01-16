const post = {
    id: 1,
    title: 'Post one',
    body: 'This is the body',
};

// convert to Json string
const str = JSON.stringify(post);

console.log(str.title);
// parse Json
const obj = JSON.parse(str);

console.log(obj.id);
// Json & array;
const posts =[
    {
        id:1,
        title:'Post one',
        body:'This isd body',
    },
    {
        id:2,
        title:'Post two',
        body:'This is the body',
    },
];
const str2 = JSON.stringify(posts);

console.log(str2);