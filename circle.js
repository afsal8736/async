function area(radius,callback){
    var carea =(Math.PI*radius*radius);
    console.log(`the area is${carea}`);
    callback(radius)
};
function calcircumference(radius){
var calcircumference=2*Math.PI*radius
console.log(`the circumference is${calcircumference}`);
}
area(4,calcircumference)