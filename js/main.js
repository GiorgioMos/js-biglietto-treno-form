// button - Genera --> ticket calculation
enter.addEventListener("click", function() {

   // get values from inputs
   let name = document.getElementById("name").value;
   let km = document.getElementById("km").value;
   let age = document.getElementById("age").value;

   // check for empty values
   let errorString = "";
   let error = false;

   if (name == "") {
      errorString += "Name: empty field!";
      error = true;
   }

   if (km == "") {
      errorString += "Km: empty field!";
      error = true;
   }



   if (error) {
      alert("ERROR: " + errorString);
   } else {
      // calculate ticket price
      let price = km * 0.21;
      let offer = "Standard";

      if (age == "Minorenne") {
         price *= (1 -  20 / 100);
         offer = "Sconto Minorenne - 20%";
      } else if (age == "Over 65") {
         price *= (1 -  40 / 100);
         offer = "Sconto Over 65 - 40%";
      }


      // random CP Code and carriage
      document.getElementById("show-carrozza").innerHTML = Math.floor(Math.random() * 9) + 1;
      document.getElementById("show-codice-CP").innerHTML = Math.floor(Math.random() * 10000) + 90001;


      // assign values
      document.getElementById("show-name").innerHTML = name;
      document.getElementById("show-offer").innerHTML = offer;
      document.getElementById("price").innerHTML = price.toFixed(2) + " €";


      // change style of form
      let form = document.getElementById("form");
      form.classList.add("form-small");

      // display ticket
      let ticket = document.getElementById("ticket");
      ticket.style.visibility = "visible";
      ticket.classList.add("ticket-show");
   }


});

let reset = document.getElementById("reset");
reset.addEventListener("click", function() {

   // change style of form
   let form = document.getElementById("form");
   form.classList.remove("form-small");

   // hide ticket
   let ticket = document.getElementById("ticket");
   ticket.style.visibility = "hidden";
   ticket.classList.remove("ticket-show");

});