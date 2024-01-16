// Challenge 1
// function getCelsius(f) {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius;
// }

const getCelsius = (f) =>((f-32)*5)/9;
function minMax(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        min,
        max,
    };
}

console.log(minMax([2,31,4,5,7]));

((length,width)=>{
    const area = length*width;

    const output = `the arae of a ractangle with a lenght of ${length} and width of ${width} is ${area}`;
    console.log(output);
})(20,10);