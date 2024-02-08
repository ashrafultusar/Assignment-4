
function deleteInvalids(array){

    if (!Array.isArray(array)) {
        return "Please input array";
    }

let arr = [];
for(const number of array){
    if(typeof number === 'number' && !isNaN(number)){
        arr.push(number)
    }
}
return arr
}

console.log(deleteInvalids(array))