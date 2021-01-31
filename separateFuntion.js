
var firstClassPlusBtn = document.getElementById("firstClassPlusBtn");
firstClassPlusBtn.addEventListener("click", function () {
   pluses("firstClassTicket");


   subTotalTicketPrice ();
   document.getElementById("sutTotal").innerHTML = subTotalTicketPrice ();

   taxPrice();
   document.getElementById("taxPrice").innerHTML = taxPrice();

   totalPrice();
   document.getElementById("finalPrice").innerHTML = totalPrice();

});

document.getElementById("firstClassMinusBtn").addEventListener("click", function () {
   minuses("firstClassTicket");

   subTotalTicketPrice ();
   document.getElementById("sutTotal").innerHTML = subTotalTicketPrice ();

   taxPrice();
   document.getElementById("taxPrice").innerHTML = taxPrice();

   totalPrice();
   document.getElementById("finalPrice").innerHTML = totalPrice();

});


document.getElementById("economyPlusBtn").addEventListener("click", function () {
   pluses("economyTicket");

   subTotalTicketPrice ();
   document.getElementById("sutTotal").innerHTML = subTotalTicketPrice ();
   
   taxPrice();
   document.getElementById("taxPrice").innerHTML = taxPrice();

   totalPrice();
   document.getElementById("finalPrice").innerHTML = totalPrice();

});

document.getElementById("economyMinusBtn").addEventListener("click", function () {
   minuses("economyTicket");

   subTotalTicketPrice ();
   document.getElementById("sutTotal").innerHTML = subTotalTicketPrice ();

   taxPrice();
   document.getElementById("taxPrice").innerHTML = taxPrice();

   totalPrice();
   document.getElementById("finalPrice").innerHTML = totalPrice();

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


function subTotalTicketPrice (){
   var getFirstClassTicket = document.getElementById("firstClassTicket").value;
   var sumFirstClassTicketPrice = getFirstClassTicket * 150;
   var getEconomyTicket = document.getElementById("economyTicket").value;
   var sumEconomyTicketPrice = getEconomyTicket * 100;

   var subTotalTicketPrice = sumFirstClassTicketPrice + sumEconomyTicketPrice;

   return subTotalTicketPrice;
}


function taxPrice(){

   var subTotalTicketPrice = parseFloat(document.getElementById("sutTotal").innerHTML);
   var tax = subTotalTicketPrice * 10/100;
   return tax;

}

function totalPrice(){

   var subTotalTicketPrice = parseFloat(document.getElementById("sutTotal").innerHTML);
   var taxPrice = parseFloat(getElementById("taxPrice").innerHTML);
   
   var totalTicketPrice = subTotalTicketPrice + taxPrice;
   return totalTicketPrice;

}