let mode = "violet";
let color;

if(mode == "dark")
{
    color = "black";
}else if(mode === "pink"){
    color = "pink";
}else if(mode === "grey")
{
    color = "grey";
}
else{
    color = "white";
}
console.log(color);

let num = prompt("Enter the number : ");

if(num%5===0)
{
    console.log(num, "is a multiple of 5");
}
else{
    console.log(num, "is not multiple of 5");
}

let score = prompt("Enter the Number : ")

if(score >=90 && score <=100)
{
    console.log('A');
}
else if(score >=70 && score <=89)
{
    console.log('B');
}else if(score >=60 && score<=69)
{
    console.log('C');
}else if(score >=50 && score <=59)
{
    console.log('D');
}
else{
    console.log('F');
}