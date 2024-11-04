function calarea(l,b,callback){
    var area = l * b;
    callback(l,b,area);
}
function calperimeter(l,b,area){
    var perimeter = 2 * (l + b);
    console.log(`the area is ${area}`);
    console.log(`the perimeter is ${perimeter}`);
}

calarea(2, 4, calperimeter);