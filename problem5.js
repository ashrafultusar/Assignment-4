
function monthlySavings(arr , livingCost){

    if(typeof arr == "number" || typeof livingCost !== "number"){
        return "invalid input"
    }
    let totalIncome = 0;
    for (let i = 0; i < arr.length; i++) {
        if( arr[i] >= 3000){
            totalIncome = totalIncome+(arr[i] - 0.2*arr[i])
           }else{
totalIncome= totalIncome+ arr[i];
           }
    }

   totalIncome = totalIncome - livingCost;

   let savings = totalIncome

   if(savings >= 0){
    return savings
   }
   else{
    return "earn more"
   }
  
}

console.log(monthlySavings(arr,livingCost))