<html>

<form action="babynames.php" method="post" >

<table style="width: 20%;">
<tr><td>
Year<br>
<select name="years">
<option value="">all</option>
<option value="2011">2011</option>
<option value="2012">2012</option>
<option value="2013">2013</option>
<option value="2014">2014</option>
<option value="2015">2015</option>
</select>
</td>

<td>
Gender<br>
<select name="Gender">
<option value="">Both</option>
<option value="f">F</option>
<option value="m">M</option>
</select>
</td>

<td>
<br>
<input type="submit" value="Submit">
</td></tr></table>



</form>
</html>


<?php
session_start();
$year=$_POST["years"];
$gender=$_POST["Gender"];

if(!empty($year)&&!empty($gender)){
 echo "Year:".$year." Gender:".$gender." \n";
}

$link=mysqli_connect("localhost","root","root","HW3");
if($link){
 $sql="SELECT * FROM BabyNames WHERE year='$year' AND gender='$gender' ";
 //echo $sql;
 $result=mysqli_query($link,$sql);
 if(mysqli_num_rows($result)!=0){
   //echo "get ".mysqli_num_rows($result)." row of data\n";

   echo "<table border='1'>
   <tr>
   <th>name</th>
   <th>year</th>
   <th>ranking</th>
   <th>gender</th>
   </tr>";
 
  while($row = mysqli_fetch_array($result))
  {
      echo "<tr>";
      echo "<td>" . $row['name'] . "</td>";
      echo "<td>" . $row['year'] . "</td>";
      echo "<td>" . $row['ranking'] . "</td>";
      echo "<td>" . $row['gender'] . "</td>";
      echo "</tr>";
  }
  echo "</table>"; 
   //echo $result;
   //console.log($result);
 }else{
  echo "no data\n";
 }
}else{
 echo "can't link to mysql\n";
}

mysqli_close($link);


?>