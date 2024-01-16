const age = 17;

if(age>=18){
    console.log('you can vote!');
}else{
    console.log('you can not vote!');
}
// using a ternary operator
age>=18?console.log('you canvote'):('you can not vote');

const canVote = age>=18?true:false;
const canVote2 = age>=18? 'you can vote':'you can not vote';

console.log(canVote);
console.log(canVote2);

const auth = true;

// Long version
// let redirect;

// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }

// Shorter ternary version
const redirect = auth
  ? (alert('Welcome to the dashbaord'), '/dashboard')
  : (alert('Access Denied'), '/login');

console.log(redirect);

// Ternary with no else
auth ? console.log('Welcome to the dashboard') : null;
// Shorthand for ternary with no else
auth && console.log('Welcome to the dashoard');