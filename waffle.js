makewaffle(geticecream);

function makewaffle(callback){
    setTimeout(() => {
       console.log("set the table");
       console.log("waffle is ready") 
       callback();
    }, 2500);
}
function geticecream(){
    setTimeout(() => {
        let icecream=false;
        if(icecream){
            console.log("got the icecream")
        }else{
            console.log("did not get icecream")
        }
    }, 1500);
}