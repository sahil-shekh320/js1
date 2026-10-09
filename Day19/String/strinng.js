
// let str = "hello world"

// console.log(str.at(1))
// console.log(str.at(1))
// console.log(str.length)
// console.log(str.concat("asdfg"))
// console.log(str+"hello")
// console.log(str.endsWith("d"))
// console.log(str.endsWith("ld"))
// console.log(str.endsWith("world"))
// console.log(str.startsWith("h"))
// console.log(str.startsWith("hello"))
// console.log(str.includes("o"))
// console.log(str.indexOf("l",4))  // jo number hai wo ye bta rha hai ki 4rth index se onword search krna start kro 
// console.log(str.slice(3))
// console.log(str.slice(3,5))



// let msg = "              asssssssss            "

// console.log(msg)
// console.log(msg.trim)
// console.log(msg.trimEnd)
// console.log(msg.trimStart)





// let str2 = "AZaz" // A = 65 to 90  a =97 to 122

// console.log(str.charCodeAt(0))
// console.log(str.charCodeAt(2))
// console.log(str.charCodeAt(3))
// console.log(str.charCodeAt(4))

// for(let i = 65;i <= 90; i++){
//     console.log(i ,String.fromCharCode(i))
// }

// for(let i = 97;i <= 122; i++){
//     console.log(i ,String.fromCharCode(i))
// }












// // us of pad

// let otp = String(Math.floor(Math.random()*1000000))
// console.log(otp , otp.padEnd(6,0))




// let str3 = "hello hey le"

// console.log(str3.replace("e","y"))
// console.log(str3.replaceAll("e","y"))




// // String are storedd in the heap when a string is changed a new string is created instead of of modifying the existing one


// let arr = "rohitrrtmkrohit"     


// function rreturn(arr){
//     let obj = {}

//     for(let item of arr)
//     {
//         if(obj[item])
//         {
//             obj[item] = obj[item] +1
//         }
//         else
//         {
//             obj[item] = 1
//         }
//     }
//     console.log(obj)
// }


// rreturn(arr)

let arr = [6,5,3,2,1]

let asc = true
let des = true

function aa(arr){for(let i = 0; i < arr.length - 1; i++)
{
    if(arr[i]>arr[i+1])
    {
        asc = false
    }
    else
    {
        des = false
    }
}
if(asc)
{
    console.log("ascending")
}
else if(des)
    {console.log("descinding")}}


aa(arr)