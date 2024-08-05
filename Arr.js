let fruits = ["Apple","Mango","Chiku","Grapes","WaterMalon","Pineapple","Orange"];
// for loop
for(let i = 0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}

// for-of loop

for(let fruit of fruits){
    console.log(fruits)
}

// prcatice questions
let marks = [85,97,44,37,76,60];

let sum = 0;

for(let val of marks){
    sum+=val;
}
let avg = sum/marks.length;
console.log(`avg marks of the class = ${avg}`);

// practice questions

let items = [250,645,300,900,50];

for(let i=0;i<items.length;i++)
{
    let offer = items[i]/10;
    items[i]-=offer;
}
console.log(items);