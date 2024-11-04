
function square(l,callback){
    var square = 1*1;
    console.log(`square of number ${l} is ${square}`);
    callback(square,l);
};
function cube(a,b){
    var cube = a*b;
    console.log(`cube of  is ${cube}`);
}
square(2,cube)
