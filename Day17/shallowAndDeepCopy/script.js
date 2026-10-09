let arr = [1,2,3,4,5]
let arr2 = [11,12,13,14,15]

console.log(...arr); // yaha ham array ke value ko spred kr rhe hai (ye bs arraye ka [] hata deta hai)

//concat two array

console.log(arr.concat(arr2))

const val = [...arr,"s",...arr2] // yaha ham do array ko ak single array me spred kr rhe hai or ham uske sath ak string bhi add kiya hai 
console.log(val)



//for object 


let obj = 
{
    a:1,
    b:2,
    c:3,
    d:4
}



let obj2 = 
{
    q:11,
    e:21,
    r:31,
    t:41
}

let val2=
{
    ...obj,
    ...obj2   //agr same key dono me hai to last wali key pahle wali key ko update kr dega 
}


console.log(val2)



let b1 = 
{
    name:"s",
    balance:50000,
    mon:1123456789
}

let b2 = {...b1}  // yaha pe hamne ak new object bnaya hai jise hamne b1 object ke sare value ko pread kr diya hai yani value ko copy kr diya hai 

b2.name = "D"
b2.balance = 10
b2.mon = 980765
console.log(b1)
console.log(b2)

                                                           //shallow copy

let person1 = 
{
    name:"s",
    age:22,
    add:{
        city:"delhi",
        country:"India"
    },
    arr:[1,2,3,4,5]
}

let person2 = {...person1}
person2.name = "D"
person2.age = 33
person2.add.city = "GKP"  //yaha pe obkject ke andr city change krne pr person1 and person2 dono me changes ho rhi hai 
person2.arr[2] = 10000000000 // yaha pe bhi wahi ho rha hai arr me changes krne pe dono ong person1 and person2 me changes ho rhe hai 

console.log(person1)
console.log(person2)


                                                     // Deep Copy
let person3 = structuredClone(person1)

console.log(person3)








                                                     //  How to conver the array and object into JSON

let arr3 = [1,2,3,4,5] 

let obj3 = {name:"Sahil",age:"22"}

let arrjson = JSON.stringify(arr3)
let orgarr = JSON.stringify(arrjson)

let obj3Json = JSON.stringify(obj3)
let orgobj3 = JSON.parse


conaole.log(arr3)
console.log(arrjson)
console.log(orgarr)


console.log(obj3)
console.log(obj3Json)
console.log(orgobj3)




