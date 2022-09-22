function getData(){
    url = "https://api2.binance.com/api/v3/ticker/24hr";
    console.log(url);
    var request = new XMLHttpRequest();
    request.onload = function(bg) {
      console.log(bg);
      console.log(bg.target.response);
      var data = JSON.parse(bg.target.response);
      console.log(data);
      createTable(data);
    }
    request.open("GET", url, true);
    request.send();
  }

function createTable(data)
  {
   index=0;
   while(data[index]&&index<40){
       var x=document.getElementById('myTable').insertRow(index+1);
       var y =  x.insertCell(0);
       y.innerHTML= data[index].symbol;
       var y =  x.insertCell(1);
       y.innerHTML= data[index].lastPrice;
       var y =  x.insertCell(2);
       y.innerHTML= data[index].priceChangePercent;
       index+=1;
     }
  }