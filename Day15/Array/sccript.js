// swapping two variable

//using third variable


console.log("using any third variable")
let a = 10
let b = 20
console.log(a)
console.log(b)

let temp = a
a = b;
b = temp;
console.log(a)
console.log(b)

//without using any third variable

console.log("without using any third variable")

// let a = 10
// let b =20
console.log(a)
console.log(b)

a = a + b
b = a - b
a = a - b

console.log(a)
console.log(b)


//inplace reversing (reversing the array without using extra space ie new array)


let arr = [1, 2, 3, 4, 5, 3, 4, 5, 6, 7, 54,]
console.log("ORG Array")
console.log(arr)

let start = 0
let end = arr.length - 1

while (start < end) {
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
}
console.log("Reverce Array")
console.log(arr)

//Serching
//linear Serching 


let arr1 = [1, 2, 3, 4, 5, 6, 6, , 5, 7, 6, 7, 65, 54]
let t = 5
console.log(arr1)

// for(let i = 0;i<arr.length;i++){
//     if(arr1[i]==t){
//         console.log(i)
//         break
//     }
// }

function firstAccurence(arr, t) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == t) {
            return i
        }
    }
    return -1
}

console.log("Serching the element ")


function lastAccurance(arr, t) {
    for (let i = arr.length - 1; i <= 0; i--) {
        if (arr[i] == t) {
            return i
        }
    }
    return -1
}




// let ans = -1
// for (let i = arr.length - 1; i <= 0; i--) {
//     if (arr[i] == t) {
//         ans = 1
//     }
// }
// return ans


// console.log(firstAccurence(arr1, 7))





                                            //Sorting of array using inbuild methord in js 

                                            //Sort MEthor 
//.sort methord sort the array in lexographical (dicnory ) order

console.log("Sorting array using sort methord")

let arr2 = [8,7,5,6,54,32,12,33]
console.log("ORG Array")
console.log(arr2)

arr2.sort((a,b) => {
    return a-b
})


console.log("sorted array (assending order)")
console.log(arr2)


arr2.sort((a,b) => {
    return b-a
})

console.log("disending array (assending order)")
console.log(arr2)



    //destructuring  of array

console.log("destructuring  of array")   
let arr3 = [1,2,3]
const[w,e,r]=arr3
console.log(w)
console.log(e)
console.log(r)



//flat methor remove the array nesting 


let arr4 = [[1,2,3],[4,5,6,[4,3,5,6]],[6,7,8,[9,7,6,5,[3,5,6,7,3]]]]

console.log("nested array")
console.log(arr4)

const arrN = arr4.flat(Infinity)
console.log(arrN)