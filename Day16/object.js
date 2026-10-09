                              //Object
                              //it is a hetrojensus

let obj = 
{
    name:"sahil",
    age:22,
    isPresent:false,
    address : 
    {
        city:"Delhi",
        country:"India"
    },
    colors:
    [
        "red","blue" ,"green"
    ],
    syaHi:()=>{
        console.log("HY")
    }
}
// console.log("Object")
// console.log(obj)


// //accesing the data in object by . operator

// console.log("accesing the data in object by . operator")
// console.log(obj.name)
// console.log(obj.isPresent)
// console.log(obj.address)
// console.log(obj.address.city)
// console.log(obj.address.country)
// console.log(obj.colors)
// console.log(obj.colors[0])
// console.log(obj.colors[1])
// console.log(obj.colors[2])
// console.log(obj.syaHi)
// obj.syaHi()


// //accesing the data in object by [] operator

// console.log("accesing the data in object by [] operator")
// console.log(obj["name"])
// console.log(obj["isPresent"])
// console.log(obj["address"])
// console.log(obj["address"]["city"])
// console.log(obj["address"]["country"])
// console.log(obj["colors"])
// console.log(obj["colors"][0])
// console.log(obj["colors"][1])
// console.log(obj["colors"][2])
// console.log(obj["syaHi"])
// obj["syaHi"]()

// //destructuring

// let {age,name,isPresent} = obj

// console.log(age,name,isPresent)
// age = 33


// //How to add info in object 

// console.log("How to add info in object ")
// let obj1 = {
//     model:"version0"
// }

// obj1.model = "version1"
// obj1.colors = "red"

// console.log(obj1)

//accesing the object by the loop (object is not sheriylies ie we can not use loop but js gave us a loop that is for in loop)

for(let item in obj)
{
    // console.log(obj.item)//yaha ham obj me item name ki key dhoondh rhe hai to ye undefine ayega 
    // console.log(obj["item"]) //yaha pe bhi yahi kam ho rha hai
    console.log(obj[item])
}



//how to create an obbje using existing data

let name = "sahil"
let age = 22
let win = true;


//first way

// let obj3 = {
//     name:name,
//     age: age,
//     win :win
// }

//second way

// let obj3 = {name,age,win}



//we can also update the key 

let obj3 = {naam:name,age,win}
console.log(obj3)

//how to delete the key value pair or properties
delete obj3.age
console.log(obj3)