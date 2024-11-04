makeWaffle(getIcecream);

function makeWaffle(callback){
    setTimeout(() => {
        console.log("set the table");
        console.log("waffle is ready");

        callback()
    }, 2500);
};

function getIcecream(){
    setTimeout(() => {
       let icecream=false;
       if(icecream){
        console.log("got the icecream");
       } else{
        console.log("did not got icecream");
       }
    }, 1500);
}