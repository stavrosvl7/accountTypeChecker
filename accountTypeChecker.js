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
        	    //In task you mention that A has to be printed only when the balance amount decreases by varying amounts each month(not increases by varying amounts)
        	    if(result>0){
        	        return "amount is increasing by varying amounts each month"
        	    }
            	return "A";
            }
        }
    
	    
	//there is a missunderstanding in task
	// 1)Type 🅱 is one where the balance amount changes by the same amount each month.
	// 2)In other words, write a function that returns B when the balance amount goes down by the same value each month or A when it varies month by month.
	// 1) and 2) does not agree because 1) says changing in general and 2) says only display B when amount DECREASES by the same value
	
	//this if(result<0) is needed only if we want to return B only in DECREASE by the same ammount
        if(result<0){
            return "B";
        }
	//this return is needed when above if is needed
        return "amount is increasing by the same amount each month"
	    
	//if we want to return B in both INCREASE and DECREASE by the same ammount we have to remove lines 67,68,69,71 and just write return "B";
    }
    return "invalid array";
};

document.write(accountTypeChecker(accountBalanceHistory));
