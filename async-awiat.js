// syncronous code -

// asyncronous code -

// sync
console.log(" I ");

console.log(" eat ");

console.log(" Ice cream ");

console.log(".................................................");

// async
console,log("I");

// This will be shown after 2 seconds
setTimeout(()=>{
    console.log("eat");
},2000)

console.log("Ice cream")

// callback
function One(){
    // all do something
}

function Two(arg){
    // do something too
}

// function One() is a callback function
Two(One)

// EXAMPLE

// Ice cream shop

// steps
// 1 place order
// 2 cut fruit
// 3 Add water
// 4 start machine
// 5 select container
// 6 select toppings
// serve ice-cream

let stock = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    Liquids :["water", "ice", "stick"],
    holder : ["come", "cup", "stick"],
    toppings : ["chocolates","peanuts"],
}

// let order = () => {};

// let production = () => {};

production()

// pending
// resolved
// rejected

let is_shop_open = true;

let order = (time, work) =>{
    return new Promise( (resolve, reject )=>{
        if(is_shop_open){
            resolve()
        }
        else{
            reject( console.log("Our shop is closed") )
        }
    } )
}

// step 1
order(2000,()=>console.log(`${stock.Fruits[0]} was selected`))

// step 2
.then(()=>{
    return order(0000, ()=>console.log('production has started'))
})

// step 3
.then(()=>{
    return order(2000, ()=>console.log('Fruit has been chopped'))
})

// step 4
.then(()=>{
    return order(2000, ()=>console.log('water and ice added')) 
})
