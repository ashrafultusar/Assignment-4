
function calculateMoney(ticketSale){

    if (ticketSale < 0) {
        return 'Invalid Number'
    }
    const perTricketPrice = 120;
    const guardSalary = 500;
    const staffLunchPerCost = 50;
    const stuffNumber = 8;

    const totalExpense = guardSalary + (staffLunchPerCost * stuffNumber);
    const totalIncome = perTricketPrice * ticketSale;

    const revenue = totalIncome - totalExpense
    return revenue;
}

console.log(calculateMoney(ticketSale))