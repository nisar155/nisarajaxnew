
caliculatearea(2,4,calculatePerimeter);
function caliculatearea(l,b,callback){
    var area =l*b;
    console.log(`the area is ${area}`);
    callback(l,b);
};
function calculatePerimeter(a,b){
    var perimeter =2*(a+b);
    console.log(`the perimeter is ${perimeter}`);
}