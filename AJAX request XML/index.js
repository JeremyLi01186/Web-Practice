function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "movies.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var j;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>title</th><th>genre</th><th>director</th><th>Short description</th><th>IMDB-rating</th><th>cast</th></tr>";
  var x = xmlDoc.getElementsByTagName("movie");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("genre")[0].childNodes[0].nodeValue +
    "</td><td>"+
    x[i].getElementsByTagName("director")[0].childNodes[0].nodeValue +
    "</td><td>"+
    x[i].getElementsByTagName("synopsis")[0].childNodes[0].nodeValue +
    "</td><td>"+
    x[i].getElementsByTagName("score")[0].childNodes[0].nodeValue +
    "</td><td>";


    var cast=x[i].getElementsByTagName("person");
     for(j=0;j<cast.length;j++){
       if(j<cast.length-1){
        table+= cast[j].attributes[0].nodeValue+",";
      }else{
        table+= cast[j].attributes[0].nodeValue+"</td></tr>";
      }
    }
  }
  document.getElementById("demo").innerHTML = table;
}