<?php
$year = $_GET['year'];
$gender = $_GET['gender'];


if($gender=="Female") $gender = 'f';
elseif($gender=="Male") $gender = 'm';


$servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "HW3";


$con=mysqli_connect($severname, $username, $password,$dbname);
if(!$con) {
	header('Location: babynames.html');
	die("Connection failed: ". mysqli_connect_error());
}

$yearStr = $year=="ALL" ? "!=''" :"='$year'"; 
$genderStr = $gender=="ALL" ? "!=''" :"='$gender'";

$query = "SELECT * FROM babynames WHERE year$yearStr AND gender$genderStr";
$result = mysqli_query($con,$query);
if($result->num_rows == 0) {
	echo "No result: ".$query;
	exit();
}

echo '<tr><th>Name</th><th>Year</th><th>Ranking</th><th>Gender</th></tr>';
while($row = mysqli_fetch_array($result)) {
	echo '<tr><td>';
	echo $row['name']."</td><td>".$row['year']."</td><td>".$row['ranking']."</td><td>".$row['gender'];
	echo '</td></tr>';
}