const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// newNumber[2,3,5];
const newNumber = numbers.map((number) => {
    return number * 2;
});
const companies = [
    { id: 1, name: 'company one', category: 'finance', start: 2001, end: 1999 },
    { id: 2, name: 'company two', category: 'finance', start: 1977, end: 2018 },
    { id: 3, name: 'company three', category: 'finance', start: 1967, end: 2019 },
    { id: 4, name: 'company four', category: 'finance', start: 2002, end: 2020 },
    { id: 5, name: 'company five', category: 'finance', start: 1988, end: 2023 },
];
// const companyInfo = companies.map((company,index) =>{
//     return {
//         name:company.name,
//         category:company.category,
//         timer: `Start: ${company.start} - end ${company.end}`,
//     };
// });
// console.log(companyInfo);

// // filter: locj theo dieu kien
// const newCompani = companies.filter((company) => {
//     // return company.start > 2000 && company.end <2020;
//     return company.start != 1999;
// });
// const newCompanies = [];
// function handleRemoeCompany(id) {
//     newCompanies = companies.filter((company) => {
//         return company.id !== id;
//     });
// }
// handleRemoeCompany(2);

const cart  = [
    {id:1,name:'product 1', price:130},
    {id:2,name:'product 2', price:140},
    {id:3,name:'product 3', price:150},
];

const total = cart.reduce(function (acc,product){
    console.log(acc,product);
    return acc + product.price;
},0);

