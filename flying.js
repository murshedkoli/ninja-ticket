
var firstClassPlusBtn = document.getElementById("firstClassPlusBtn");
firstClassPlusBtn.addEventListener("click", function () {
   pluses("firstClassTicket");


   totalTicketPrice();
});

document.getElementById("firstClassMinusBtn").addEventListener("click", function () {
   minuses("firstClassTicket");

   totalTicketPrice();
});


document.getElementById("economyPlusBtn").addEventListener("click", function () {
   pluses("economyTicket");

   totalTicketPrice();
});

document.getElementById("economyMinusBtn").addEventListener("click", function () {
   minuses("economyTicket");

   totalTicketPrice();
});




function pluses(id) {
   const previousValue = parseFloat(document.getElementById(id).value);
   const totalValue = previousValue + 1;
   document.getElementById(id).value = totalValue;

};

function minuses(id) {
   const previousValue = parseFloat(document.getElementById(id).value);
   const totalValue = previousValue - 1;
   document.getElementById(id).value = totalValue;

   if (totalValue < 0) {
      document.getElementById(id).value = 0;
   };


};


function totalTicketPrice() {
   var getFirstClassTicket = document.getElementById("firstClassTicket").value;
   var sumFirstClassTicketPrice = getFirstClassTicket * 150;
   var getEconomyTicket = document.getElementById("economyTicket").value;
   var sumEconomyTicketPrice = getEconomyTicket * 100;

   var subTotalTicketPrice = sumFirstClassTicketPrice + sumEconomyTicketPrice;

   document.getElementById("sutTotal").innerHTML = subTotalTicketPrice;

   var tax = subTotalTicketPrice * 10 / 100;
   document.getElementById("taxPrice").innerHTML = tax;

   var totalTicketPrice = subTotalTicketPrice + tax;
   document.getElementById("finalPrice").innerHTML = totalTicketPrice;
}






var bookBtn = document.getElementById("bookNowBtn");
bookBtn.addEventListener("click", function () {
   var getTotal = parseFloat(document.getElementById("finalPrice").innerHTML);
   var flayingFrom = document.getElementById("flayingFrom").value;
   var flayingTo = document.getElementById("flayingTo").value;
   var departureDate = document.getElementById("departure").value;
   var returnDate = document.getElementById("return").value;

   if (flayingFrom != "" &&
         flayingTo != "" &&
         departureDate != "" &&
         returnDate != "" &&
         getTotal != 0
   ){

  printInfo();
}
else {
   alert("Please Fill All Information");
}
});


function printInfo() {

   document.getElementById("bookInfo").style.display = "none";
   document.getElementById("printInfo").style.display = "block";


   var flayingFrom = document.getElementById("flayingFrom").value;
   var flayingTo = document.getElementById("flayingTo").value;
   var departureDate = document.getElementById("departure").value;
   var returnDate = document.getElementById("return").value;
   var getFirstClassTicket = parseFloat(document.getElementById("firstClassTicket").value);
   var getFirstClassTicketPrice = getFirstClassTicket * 150;
   var getEconomyTicket = parseFloat(document.getElementById("economyTicket").value);
   var getEconomyTicketPrice = getEconomyTicket * 100;
   var getSubTotal = parseFloat(document.getElementById("sutTotal").innerHTML);
   var getTax = parseFloat(document.getElementById("taxPrice").innerHTML);
   var getTotal = parseFloat(document.getElementById("finalPrice").innerHTML);




   document.getElementById("flayingFromText").innerHTML = flayingFrom;
   document.getElementById("flayingToText").innerHTML = flayingTo;
   document.getElementById("departureDate").innerHTML = departureDate;
   document.getElementById("returnDate").innerHTML = returnDate;
   document.getElementById("noOfFirstClassTicket").innerHTML = getFirstClassTicket;
   document.getElementById("noOfEconomyTicket").innerHTML = getEconomyTicket;
   document.getElementById("priceOfFirstClassTicket").innerHTML = getFirstClassTicketPrice;
   document.getElementById("priceOfEconomyTicket").innerHTML = getEconomyTicketPrice;
   document.getElementById("subTotalTaka").innerHTML = getSubTotal;
   document.getElementById("taxTaka").innerHTML = getTax;
   document.getElementById("totalAmount").innerHTML = getTotal;

}




document.getElementById("printBtn").addEventListener("click", function(){
   document.getElementById("menu").style.display = "none";
   document.getElementById("printBtnHide").style.display = "none";
   document.getElementById("thanks").style.display = "block";
   print();
})




