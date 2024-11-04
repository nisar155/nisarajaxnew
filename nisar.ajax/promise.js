function makeWaffle(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           resolve("Waffle ready") 
        }, 2500);
    })
}
function getIcecream(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let icecream=false;
            if(icecream){
                resolve("got icecream")
            }else{
                reject("did not got icecream")

            }
        }, 1500);
    })
}
function snack(){
    makeWaffle().then(function(data){
        console.log(data)
        return getIcecream()
    })
    .then(function(data){
        console.log(data)
        console.log("Set up the table")
    })
    .catch(function(error){
        console.log(`${error} so make choclate syrup`)
    
    })
}
snack()