


// var bookBtn = document.getElementById("bookNowBtn");
// bookBtn.addEventListener("click", printInfo());


// function printInfo() {

//     document.getElementById("main-content").style.display = "none";
//     document.getElementById("print-details").style.display = "block";

//     var flayingFrom = document.getElementById("flayingFrom").value;
//     var flayingTo = document.getElementById("flayingTo").value;
//     var departureDate = document.getElementById("departure").value;
//     var returnDate = document.getElementById("return").value;
//     var getFirstClassTicket = document.getElementById("firstClassTicket").value;
//     var getFirstClassTicketPrice = getFirstClassTicket * 150;
//     var getEconomyTicket = document.getElementById("economyTicket").value;
//     var getEconomyTicketPrice = getEconomyTicket * 100;
//     var getSubTotal = document.getElementById("sutTotal").innerHTML;
//     var getTax = document.getElementById("taxPrice").innerHTML;
//     var getTotal = document.getElementById("finalPrice").innerHTML;




//     document.getElementById("flayingFromText").innerHTML = flayingFrom;
//     document.getElementById("flayingToText").innerHTML = flayingTo;
//     document.getElementById("departureDate").innerHTML = departureDate;
//     document.getElementById("returnDate").innerHTML = returnDate;
//     document.getElementById("noOfFirstClassTicket").innerHTML = getFirstClassTicket;
//     document.getElementById("noOfEconomyTicket").innerHTML = getEconomyTicket;
//     document.getElementById("priceOfFirstClassTicket").innerHTML = getFirstClassTicketPrice;
//     document.getElementById("priceOfEconomyTicket").innerHTML = getEconomyTicketPrice;
//     document.getElementById("subTotalTaka").innerHTML = getSubTotal;
//     document.getElementById("taxTaka").innerHTML = getTax;
//     document.getElementById("totalAmount").innerHTML = getTotal;

// }




// function printBtn() {
//     var getFirstClassTicket = document.getElementById("firstClassTicket").value;
//     var sumFirstClassTicketPrice = getFirstClassTicket * 150;
//     var getEconomyTicket = document.getElementById("economyTicket").value;
//     var sumEconomyTicketPrice = getEconomyTicket * 100;

//     var subTotalTicketPrice = sumFirstClassTicketPrice + sumEconomyTicketPrice;

//     document.getElementById("sutTotal").innerHTML = subTotalTicketPrice;

//     var tax = subTotalTicketPrice * 10 / 100;
//     document.getElementById("taxPrice").innerHTML = tax;

//     var totalTicketPrice = subTotalTicketPrice + tax;
//     document.getElementById("finalPrice").innerHTML = totalTicketPrice;
// }