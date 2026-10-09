       //Object Day2
       // protecting the object 0


       const obj = 
       {
        name:"s",
        age:22
       }


    //    Object.freeze(obj);
    // Object.seal(obj)
    // Object.preventExtensions(obj)


       delete obj.age;
       obj.name = "d"
       obj.ad = "Delhi"


       console.log(obj)