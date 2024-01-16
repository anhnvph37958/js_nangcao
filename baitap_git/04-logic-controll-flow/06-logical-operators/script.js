console.log(10 < 20 && 30 > 15 && 40 > 30); // Must all be true
console.log(10 > 20 || 30 < 15); // Only one has to be true

let a;
a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log(a);

const posts = ['post one', 'post two'];
posts.length > 0 && console.log(posts[0]);

let b
b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);

let c;
c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = "" ?? 30;
console.log(c);