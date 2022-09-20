var checkButton = document.querySelector("#button-check");
var billAmount = document.querySelector(".billAmount");
var cashGiven = document.querySelector(".cashGiven");

var change = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

function clickHandler(){
    var given = cashGiven.value;
    var bill = billAmount.value;
    console.log("given", given);
    console.log("bill amount", bill);
    var diff = given - bill;
    var rowCells = document.querySelector(".change-table").rows[1].cells;
    if(diff<0){ 
        alert("Sorry you can't proceed as you don't have enough money!!");
    }
    else if(given<0 || bill<0){
        alert("Either values can't be negative");
    }
    else if(diff === 0){
        alert("You won't get any change as you paid the exact amount!!")
    }
    else{
        for(var i = 0; i<10; i++){
            var currNoteCount = Math.floor(diff/change[i]);
            console.log(currNoteCount);
            diff = diff%change[i];
            rowCells[i+1].innerHTML = currNoteCount;
        }

    }
    
}
checkButton.addEventListener("click", clickHandler);