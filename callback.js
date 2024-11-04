// function add(a,b){
//     var sum = a+b;
//     return sum;
// }
// function display(val){
//     console.log(val)
// }

// var result = add(2,3);
// display(result)

// function addc(a,b,callback){
//     var sum = a+b;
//     callback(sum);
// }
// function displayc(val){
//     console.log(`the sum is ${val}`)

// }
// addc(1,2,displayc)

function add(a,b,callback){
    var sum = a + b;
    callback(sum);
}
function display(val){
    var square = val * val;
    console.log(`the sum is ${val}`);
    console.log(`square of sum id ${square}`);
}
add(2,2,display);