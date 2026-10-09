// Given:let numbers = [12, -5, 20, 7, -10, 30, 15];Using only ONE loop, find:• Sum of all numbers• Largest
// number• Smallest number• Count of positive numbers• Count of negative numbers• Count of even numbers•
// Count of odd numbersRestriction: Only one loop. No built-in array methods


// let numbers = [12, -5, 20, 7, -10, 30, 15]

// let sum = 0;
// let gnum = 0;
// let minNumber = numbers[0]
// let positive = 0;
// let negative = 0;
// let oddnum = 0;
// let evennum = 0;

// for(let i =0;i<numbers.length;i++ )
// {
//     sum += numbers[i]
//     if(numbers[i]>gnum)
//     {
//         gnum = numbers[i]
//     }
//     if(numbers[i]<minNumber)
//     {
//         minNumber = numbers[i]
//     }
//     if(numbers[i]>=0)
//     {
//         positive++
//     }
//     if(numbers[i]<0)
//     {
//         negative++
//     }
//     if(numbers[i]%2 != 0)
//     {
//         oddnum++
//     }
//     if(numbers[i]%2 == 0)
//     {
//         evennum++
//     }
// }



// Q39. Number Analysis
// Create analyzeNumber(num). Check whether the number is positive, negative or zero, and 
// whether it is even or odd. Example: analyzeNumber(25) → Positive, Odd



// function analyzeNumber(num)
// {
//     if(num<0)
//     {
//         console.log("Negative")
//     }
//     if(num>0) {
//         console.log("Positive")
//     }

//     if(num==0){
//         console.log("zero")
//     }
//     if(num%2==0)
//     {
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
// }

// analyzeNumber(25)




// Create:let calculator = {    num1: 10,    num2: 20};Create a function that takes this object and returns num1 + 
// num2. Expected: 30

// let calculator = 
// {
//     num1: 10, num2:20
// }

// function sumobj(calculator)
// {
//     let sum = 0;
//     for(let item in calculator)
//     {
//         sum += calculator[item]
//     }
//     return sum
// }

// sumobj(calculator);


// Given:let student = {    name: "Aman",    marks: 85};If marks >= 40 print Pass, otherwise print Fail.

// let student = {    name: "Aman",    marks: 85};

// for(let item in student)
// {
//     if(student[item]>=40)
//     {
//         console.log("pass")
//     }
// }


// Given:let student = {    name: "Rahul",    age: 20,    course: "JavaScript"};Print name, change age to 21, add 
// city: "Delhi", and print the updated object.

let student = {    name: "Rahul",    age: 20,    course: "JavaScript"};

console.log(student.name)
student.age = 21
student.city = "Delhi"
console.log(student)


// Create a student object containing name, age, course and marks. Print all four values.

let student =
{
    name:"sahil",
    age:21,
    course:"jsx",
    marks:"90"
}

console.log(student)

// let numbers = [10, 20, 30, 40, 50]; Calculate the average using a single loop. Expected: 30.

// let numbers = [10, 20, 30, 40, 50];


// let total = 0
// for(let i =0;i<numbers.length;i++)
// {
//     total += numbers[i]
// }
// console.log(total/numbers.length)


// let numbers = [10, 20, 30, 40, 50]; let target = 30; Check whether target exists. Expected: Found


// let numbers = [10, 20, 30, 40, 50];

// let target = 30

// for(let i=0;i<numbers.length;i++)
// {
//     if()
// }


function fac (num)
{
    let fact = 1;
    for(let i = 2;i<=num;i++)
    {
        fact *= i
    }
    return fact
}

fac(5)


