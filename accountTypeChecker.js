const accountBalanceHistory = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  }
]

const checkArrayValidity = (accountBalanceHistory) => {
    //I make the assumption that array has the correct structure
    
    //check that array contains at least 2 elements
    if(accountBalanceHistory.length < 2){
        return false;
    }
    
	for(i=0;i<accountBalanceHistory.length;i++){
	    //check every element's amount is a number
	    if(isNaN(accountBalanceHistory[i].account.balance.amount)){
            return false;
        } 
        //check that months are increasing by 1
        if(i != accountBalanceHistory[i].monthNumber){
            return false;
        }
        
    }
    
    return true;
}

const accountTypeChecker = (accountBalanceHistory) => {

    if(checkArrayValidity(accountBalanceHistory)){
     	let result = accountBalanceHistory[0].account.balance.amount-accountBalanceHistory[1].account.balance.amount;
    
    	for(i=1;i<accountBalanceHistory.length-1;i++){
        	if(accountBalanceHistory[i].account.balance.amount-accountBalanceHistory[i+1].account.balance.amount!=result){
            	return "A";
            }
        }
    
        return "B";
    }
    return "invalid array";
};

document.write(accountTypeChecker(accountBalanceHistory));