function area(r,callback){
var carea=Math.PI*r*r;
console.log(`the area is ${carea}`);
callback(r)
}
function circumference(r){
var circumference = (2*Math.PI)*r
console.log(`the circumference is ${circumference}`)
}
area (4,circumference)