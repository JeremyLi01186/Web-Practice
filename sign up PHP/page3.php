<?
session_start();

if (isset($_SESSION["usr"])) {
	$_SESSION["num_visits"]++;
	echo "Welcome". $_SESSION["usr"];
	echo "\nYou visited this page" . $_SESSION["num_visits"] . "times."
}
else{
	echo"welcome guest";
}


?>
