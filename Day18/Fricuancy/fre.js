

// // // // how to calculate the fricuansy 

// // let arr = [1,2,3,4,2,1,3,4,3,3,5,] 


// // let obj ={}
// // for(let item of arr)
// // {
// //     if(obj[item])
// //     {
// //      obj[item]++ 
// //      // ya obj[item] = obj[item]+1 
// //     }else
// //     {
// //         obj[item] = 1
// //     }
// // }

// // console.log(obj)



// // // es code ko ham or bhi chota kr skte hai 

// // for(let item of arr)
// // {
// //     obj[item] = obj[item] +1 || 1  
// // }

// // console.log(obj)



// // /////////////////////// same on string 

// // let str = "abcabcabc"
// // console.log(str)
// // let obj1 =  {}
// // for(let item of str)
// // {
// //     obj1[item] = obj1[item] +1 || 1  
// // }
// // console.log(obj1)




// const std = 
// [
//     {name:"Aman",marks:85,age:20},
//     {name:"Riya",marks:92,age:19},
//     {name:"Aman",marks:67,age:21},
//     {name:"Aman",marks:78,age:20},
//     {name:"Aman",marks:92,age:22}
    
// ];

//  function solve(arr)
//  {
    
//     let youngest = arr[0];
//     let totalstd = 0;
//     let passedstd = [];
//     let avmarks  = 0
//     let topper  = arr[0] 
//     for(let item of arr)
//     {
//         if(item.age<youngest)
//         {
//             youngest.push(item)
//         }
//         if(item.marks>topper)
//         {
//             topper = item.name
//         }
//         if(item.marks>=70)
//         {
//             passedstd.push(item.name)
//         }
//         totalstd++
        
//     }
//     return{
//         youngest,topper,totalstd,passedstd,
//     }
//  }
// console.log( solve(std))





let n =123
let q = 0
while(n>0)
{
    let a = n%10
    q = q + a*a*a
    n = n/10

}

console.log(q)