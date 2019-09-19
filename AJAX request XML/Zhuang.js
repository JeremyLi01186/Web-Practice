function myFunction(xml) {
  var i;
  var j;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>title</th><th>director</th><th>Short description</th><th>imdb_rating</th><th>genre</th><th>cast</th></tr>";
  var x = xmlDoc.getElementsByTagName("movie");
  for (i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("director")[0].childNodes[0].nodeValue +
    "</td><td>"+
    x[i].getElementsByTagName("synopsis")[0].childNodes[0].nodeValue +
    "</td><td>"+
    x[i].getElementsByTagName("score")[0].childNodes[0].nodeValue +
    "</td><td>";

    //genre
    var genres=x[i].getElementsByTagName("genre");
    for(j=0;j<genres.length;j++){
       //console.log(genres[j].childNodes[0].nodeValue);
       if(j<genres.length-1){
        table+= genres[j].childNodes[0].nodeValue+",";
      }else{
        table+= genres[j].childNodes[0].nodeValue+"</td><td>";
      }
    }

    //cast
    var cast=x[i].getElementsByTagName("person");
     for(j=0;j<cast.length;j++){
       //console.log(genres[j].childNodes[0].nodeValue);
       if(j<cast.length-1){
        table+= cast[j].attributes[0].nodeValue+",";
      }else{
        table+= cast[j].attributes[0].nodeValue+"</td></tr>";
      }
    }

    //console.log("---------------------------------");
  }