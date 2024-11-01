function init() {
  setInterval(() => {
    var firstDate = localStorage.getItem('moneyIncrAfk.visitDateTime');
    var fd = new Date(firstDate).getTime();
    
    var present = new Date().getTime();
    
    var balance = document.getElementById("balance");
    
    var t = (present - fd) / 1000;
    
    var mBalance = equationVal(t);
    
    balance.innerHTML = "$" + new Intl.NumberFormat().format(Math.trunc(mBalance));
    
    // display creator
    document.getElementById("creator").innerHTML = displayCreator("Louie Kurenai", 2024)
  });
}

init();