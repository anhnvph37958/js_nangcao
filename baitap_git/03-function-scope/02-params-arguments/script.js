// default params 
function registerUser(user = 'Bot'){
    // old way before using `=`
    // if(!user){
    // user  ='bot'
    //}
    return user + 'is registerUser';
}

console.log(registerUser());

// reset params
function sum(...numbers){
    let total =0;

for(const num of numbers){
    total +=num;

}
return total;

}
console.log(sum(1,2,3,4,6,7,100));
// object as param
function loginUser(user){
    return `the user ${user.name} wwith the id of ${user.id} is logged in`;

}
const user ={
    id:1,
    name: 'john',

};
console.log(loginUser(user));
console.log(
    loginUser(
        {
            id:2,
            name:"SaSSa",
        }
    )
);
// arrays as params
function getRandom(arr){
    const randomIndex = Math.floor(Math.random()* arr.lenght);

   const item  = arr[randomIndex];

    console.log(item);
}
arr = [1,2,3,6,7,88,96,100];
getRandom(arr);