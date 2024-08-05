// function myFunction() {
//     console.log("Welcome to pune");
//     console.log("Pune is so famous");
// }

// myFunction();

// const arrowSum = (a,b) =>{
//     console.log(a + b);
// }

// const arrowMul = (a,b)=>{
//     console.log(a*b);
// }

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//        if(char === "a"||char ==="e"||char ==="i"||char==="o"||char === "u")
//        {
//         count++;
//        }
//     }
//     console.log(count);
// }


// for-Each

// let arr = ["pune","mumbai","latur","nagpur","nanded"];

// arr.forEach((val) => {
//     console.log(val.toUpperCase());
// });

// let arr = [5,6,2,1,3];

// const output = arr.reduce((prev,curr)=>{
//     return prev > curr?prev:curr;
// });

// console.log(output);

let n = prompt("Enter the number : ");
let arr = [];

for(let i = 1;i<=n;i++)
{
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((res,curr) =>{
    return res +curr;
})
console.log(sum);

let factorial = arr.reduce((res,curr) =>{
    return res * curr;
})
console.log("factorial = ", factorial);



