function add(a,b,callback){
    var sum = a+b;
    var square = sum*sum;
    callback(sum,square)
}
function display(val,vale){
    console.log(`the sum is ${val}`)
    console.log(`the square is ${vale}`)
}
add(1,2,display)
