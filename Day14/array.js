// let arr = [1,2,3,"abc",false,[]]

// console.log(arr)
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])



// let arr = [1,2,3,4,5]

// inbuilt methor or function in js 

//  const newLength = arr.push(12,13,14,15)

// const removedValue = arr.pop()

// const StartingremovedValue = arr.shift()

// const  StartingnewLength = arr.unshift(-1,-2,-3)



//  console.log(newLength);


// slice Methord

//  let arr = [1,2,3,4,5];
//  let ans = arr.slice(3)  //return a new array from index 3 to last index
//  let ans2 = arr.slice(1,4)   //return a new array from index 1 to 4-1 index
//  let ans3 = arr.slice(1,400)  //return a new array from index 3 to last index


//  let ans4 = arr.slice(-3)  //return a new array from index -3 to last index
//  let ans5 = arr.slice(-3,-1) //return an inpty array
//  let ans6 = arr.slice(-3,-5) //return a new array from index -3 to -5-1 index

// console.log(ans)
// console.log(ans2)
// console.log(ans3)
// console.log(ans4)
// console.log(ans5)
// console.log(ans6)
// console.log(ans)



//splice

//  let arr = [1,2,3,4,5,6,7];

//  let ans1 = arr.splice(2,3)

//  console.log(arr,ans1)
  

                               //some other method

// let arr = [1, 2, 3, 4, 5, 6, 7];

// const ans1 = arr.includes(52)  // elemnt is exist or not return true or false
// const ans2 = arr.indexOf(4) // return the index of the lemen t
// const ans3 = arr.lastIndexOf(4)  //return last acrence elemenrt index
// const ans4 = arr.join("-")
// const ans5 = arr.reverse() //reverse the array 
// const ans6 = arr.concat([12, 13, 14]) //join two array

// console.log(ans1)
// console.log(ans2)
// console.log(ans3)
// console.log(ans4)
// console.log(ans5)
// console.log(ans6)



                                               //array print by loops

let arr = [1, 2, 3, 4, 5, 6, 7];

for(let item of arr){
    console.log(item)
}

let i = 0;
while(i<arr.length){
    console.log(arr[i])
    i++
}

for(let i=arr.length-1;i>=0;i--){
    console.log(arr[i])
}


