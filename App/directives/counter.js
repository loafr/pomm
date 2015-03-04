
//this will need to be turned into a directive


     var moneyPot = 43618;
     setInterval(
     function () {
         moneyPot = moneyPot + (Math.random() * 87);
         moneyPot.toFixed(2);
         return moneyPot;
         

     }, 1000);
