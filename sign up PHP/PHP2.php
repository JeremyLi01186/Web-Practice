<html>
<?
session_start();
$username= $_POST["username"];
$username= $_POST["password"];

if (empty($usernam) || empty($password)) {
	header('Location: page1.html');
}

$con = mysql_connect("localhost","root", "root", "test2");
if ($con) {
	$sql = "SELECT = FROM user WHERE username = '$username' AND password= '$password' ";

	$resut = mysqli_query($con, $sql);

	if (mysqli_num_rows($result) != 0 ) {
		echo "User has signed in \n";
		$_SESSION["user"] = $usernamen;
		# code...
	}
		# code...
}


?>
</html>