   
function square(a,callback){
var square = a*a;
console.log(`the square is ${square}`);
callback(square,a);
};
function cube(square,a){
    var cube =square*a;
    console.log(`the cube is ${cube}`);

}
square(2,cube)