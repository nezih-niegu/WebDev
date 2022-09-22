function getData(){
    url = "https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/1002000001/es/01/false/BISE/2.0/02c49f7d-32df-6048-4648-673e3542b7f8?type=json";
    //console.log(url);
    var request = new XMLHttpRequest();
    request.onload = function(bg) {
      console.log(bg);
      console.log(bg.target.response);
      var data = JSON.parse(bg.target.response);
      console.log(data);
      var date = document.getElementById("date");
  
      date.innerHTML = data.Series[0].LASTUPDATE;
      console.log(data);
      createTable(data);
    }
    request.open("GET", url, true);
    //request.send();
  }

function createTable(data)
  {
  cn = 7;
  index=0;
   while(data.Series[0].OBSERVATIONS[index]){
     var x=document.getElementById('myTable').insertRow(r);
     for(var c=0;c<cn;c++)  
      {
       var y=  x.insertCell(c);
       y.innerHTML= data.Series[0].OBSERVATIONS[index]; 
      }
      r+=1;
      index+=1;
     }
  }