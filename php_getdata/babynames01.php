<html>
    
   <head>
   <title>Top Baby Names</title>
   <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
   </head>

   <body>
      <h2>Enter Year:</h2>
      <form action="babynames01.php" method="post">

      <!-- Please input year: <input type="text" id="year" name="year"/> -->
      <select name="year">
       <option value="">choose year:</option>
       <option value="2005">2005</option>
       <option value="2006">2006</option>
       <option value="2007">2007</option>
       <option value="2008">2008</option>
       <option value="2009">2009</option>
       <option value="2010">2010</option>
       <option value="2011">2011</option>
       <option value="2012">2012</option>
       <option value="2013">2013</option>
       <option value="2014">2014</option>
       <option value="2015">2015</option>
    </select>
        <input type="radio" name="q" value="m" />M
        <input type="radio" name="q" value="f" />F
    

      <input type="submit" name="submit" value="Submit">  

      </form>
      <br/>
      <br/>

   </body>

</html>

<?php
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "HW3";

    $conn=mysqli_connect($severname, $username, $password,$dbname);
 
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    } 
    //echo "Connected successfully"."</br>";
    
    $year = $_POST["year"];
    $gender = ($_POST["q"]);
    //echo "$gender"."</br>";
    //echo "$year";
    //echo "the is set year".isset($year)."</br>";
    //echo "the is set gender".isset($gender);

    $year = isset($_POST["year"])? htmlspecialchars($_POST["year"]) : '';
    //echo "the year is...."."$year"."</br>";
    if (($year && isset($gender))) {
        # code...
        echo "chose YEAR and GENDER"."</br>";
        echo "YEAR:  ".$year."</br>";
        echo "GENDER:  ".$gender."</br>";
        echo "The Top-five Popular names "."</br>";
        $sql = "SELECT * FROM BabyNames WHERE year='$year' AND gender='$gender' order by ranking limit 5";
        $result = mysqli_query($conn,$sql);
        //header('Location: '."babynames.php");
        //echo "Reload Page...".$year;
    }else if($year){
      # code...
        echo "only choose year"."</br>";
        echo "YEAR:  ".$year."</br>";
        echo "The Top-five Popular names "."</br>";
        $sql = "SELECT * FROM BabyNames WHERE year='$year' order by ranking limit 5";
        $result = mysqli_query($conn,$sql);
    }else if($gender == 'm' || $gender == 'f'){
        echo "only choose gender"."</br>"; 
        echo "GENDER:  ".$gender."</br>";
        echo "The Top-five Popular names "."</br>";
        $sql = "SELECT * FROM BabyNames WHERE gender='$gender' order by ranking limit 5";
        $result = mysqli_query($conn,$sql);
    }else{
        echo "choose nothing..."."</br>";
        echo "default year: ALL Year....."."</br>";
        echo "default gender: Both Gender....."."</br>";
        echo "ALL POPULAR NAMES ARE BELOW:";
        $result = mysqli_query($conn,"SELECT * FROM BabyNames");
    }

    

    if (mysqli_num_rows($result) > 0) {
        //echo "result";
        echo "<table class='table' border='1'>
          <tr>
          <td>Name</td>
          <td>Year</td>
          <td>Ranking</td>
          <td>Gender</td>
          </tr>";
    //while($row = mysqli_fetch_array($result)) {
         
    while($row = $result->fetch_assoc()) {
          echo "<tr>";
          echo "<td>" . $row['name'] . "</td>";
          echo "<td>" . $row['year'] . "</td>";
          echo "<td>" . $row['ranking'] . "</td>";
          echo "<td>" . $row['gender'] . "</td>";
          echo "</tr>";   
    }
    echo "</table>";
          //}
    }else{
        echo "no result";
    }
    
    

?>



<script>    
    // $(document).ready(function(){
    //     //alert("123");
    //      $('#button').click(function(){ 
    //          var year=$('#year').val();
    //          alert("123");
    //          <?php 

    //             echo "777777";
    //             header('Location: '.babynames.php);
    //             echo "123456";

    //          ?>

    //      });
    // });

</script>

