// Design a cash register drawer function checkCashRegister() that accepts purchase
// price as the first argument (price), payment as the second argument (cash), and
// cash-in-drawer (cid) as the third argument.
//
// cid is a 2D array listing available currency.
//
// Return the string "Insufficient Funds" if cash-in-drawer is less than the change
// due. Return the string "Closed" if cash-in-drawer is equal to the change due.
//
// Otherwise, return change in coin and bills, sorted in highest to lowest order.
//
// checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return an array.
// checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
// checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
// checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["QUARTER", 0.50]].
// checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
// checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
// checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
// checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Closed".

function checkCashRegister(price, cash, cid){
    var changeNeeded    = cash - price;
    var cashInDrawer    = 0;
    var counter         = 0;
    var change          = [];
    var unitsAvailable  = {};
    var changeValues    = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.10,
        "QUARTER": 0.25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    };

    for(var i = 0; i < cid.length; i++){
        cashInDrawer += cid[i][1];
        unitsAvailable[cid[i][0]] = cid[i][1] / changeValues[cid[i][0]];
    }

    console.log(unitsAvailable);

    if(cashInDrawer < changeNeeded){
        return "Insufficient Funds";
    } else if(cashInDrawer === changeNeeded){
        return "Closed";
    } else{
        for(var i = 8; i >= 0; i-= 1){
            while(changeValues[cid[i][0]] <= changeNeeded){
                if(unitsAvailable[cid[i][0]] > 0){
                    counter ++;
                    unitsAvailable[cid[i][0]] -= 1;
                    changeNeeded = changeNeeded - changeValues[cid[i][0]];

                    changeNeeded = Math.round(changeNeeded * 100) / 100;

                } else if(unitsAvailable[cid[i][0]] === 0){
                    break;
                }
            }

            if(counter > 0){
                var tempArr = [];
                tempArr.push(cid[i][0]);
                tempArr.push(counter * changeValues[cid[i][0]]);
                change.push(tempArr);
                counter = 0;
            }
        }
        if(changeNeeded > 0){
            return "Insufficient Funds";
        } else{
            return change;
        }
    }
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10],
["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00],
["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
