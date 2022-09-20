var checkButton = document.querySelector("#button-check");
var billAmount = document.querySelector(".billAmount");
var cashGiven = document.querySelector(".cashGiven");
var alertLine = document.querySelector(".alert-line");

var change = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

function clickHandler(){
    var given = cashGiven.value;
    var bill = billAmount.value;
    var diff = given - bill;
    var rowCells = document.querySelector(".change-table").rows[1].cells;
    var rowCells0 = document.querySelector(".change-table").rows[0].cells;

    for(var i = 0; i<10; i++){
        rowCells0[i+1].style.textDecoration = "none";
        rowCells[i+1].style.fontWeight = "normal";
        rowCells[i+1].innerHTML = "";

    }

    if(given.toString().length == 0 || bill.toString().length == 0){
        alertLine.innerHTML = "!Error: Kindly Enter all the values";
    }
    else if(bill == 0){
        alertLine.innerHTML = "!Error: Bill Amount can not be 0";
    }
    else if(diff<0){ 
        alertLine.innerHTML = "!Error: You can't proceed because of insufficient balance!!";
    }
    else if(given<0 || bill<0){
        alertLine.innerHTML = "!Error: Either values can't be negative";
    }
    else if(diff === 0){
        alertLine.innerHTML = "!Error: You won't get any change as you paid the exact amount!!";
    }
    else{
        alertLine.innerHTML = "";
        for(var i = 0; i<10; i++){
            var currNoteCount = Math.floor(diff/change[i]);
            console.log(currNoteCount);
            diff = diff%change[i];
            rowCells[i+1].innerHTML = currNoteCount;
            if(currNoteCount){
                rowCells0[i+1].style.textDecoration = "underline";
                rowCells[i+1].style.fontWeight = "bold";
                rowCells[i+1].style.fontSize = "larger";
            }
        }
    }
    
}
checkButton.addEventListener("click", clickHandler);