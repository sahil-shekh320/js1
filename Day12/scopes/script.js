// global scope 


    var a1 = 10
    let b1 = 20
    const c1 = 30

    console.log(a1)
    console.log(b1)
    console.log(c1)






// block scope  {if-else or conditionals loops etc  (function is not a block)}
// if a variable inside a block var shows globle scope where ley and const showa block level scop 

{
    var a1 = 1  // show the global scope
    let b1 = 2
    const c1 = 3


    console.log(a1)
    console.log(b1)
    console.log(c1)
}

    console.log(a1)
    // console.log(b1) //block scop
    console.log(c1) // block scop

// functional scope
/**
 * in case of function let , var ,const shows functional scope only
 */

function abc()
{
     var t1 = 100
     let y1 = 200
     const u1 = 300
   
}


// we can not use it uout sitd 
console.log(t1)
console.log(y1)
console.log(u1)




    /**
     *  
     *
     */