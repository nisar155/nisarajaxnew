function makeWaffle(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Waffle is ready")
           resolve("Waffle ready") 
        }, 2500);
    })
}
function getIcecream(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let icecream=false;
            if(icecream){
                console.log("Got icecream")
                resolve("got icecream")
            }else{
                reject("did not got icecream")

            }
        }, 1500);
    })
}
async function snack() {
    try {
        await makeWaffle();
        await getIcecream();
        console.log("set up the table")
    } catch (error) {
       console.log(`${error} so make choclate syrup`) 
    }
}
snack()
