<?php

  session_start();

  $url = pathinfo($_SERVER['REQUEST_URI']);
  $Num = $url['basename'];
  //echo $Num;


    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "PW6";

    $conn=mysqli_connect($severname, $username, $password, $dbname);
  
    $res = array();
    $res2 = array();


  if($conn){


     $sql = "SELECT * FROM books"; 
     $result = mysqli_query($conn,$sql);


    if (mysqli_num_rows($result) != 0) {
         // echo "result";
     
       while($row = mysqli_fetch_array($result)) {
         
          $book = array('ISBN' => $row['ISBN'], 'Author' => $row['Author'], 'Title' => $row['Title'], 'Price' => $row['Price'], 'Category' => $row['Category']);
          array_push($res,$book);


          if($Num!=0){
            if($row['ISBN'] == $Num){
              array_push($res2,$book);
              
            }
          }
         }


      if($Num != 0){
          if(empty($res2)){
              echo "We don't have this book";
          }
          else echo json_encode($res2); 
      }
      else echo json_encode($res);
      //echo json_encode($res);


/*
      if($Num != 0){
          if($row['ISBN'] == $Num){
            array_push($res2,$book);
            echo json_encode($res2); 
          }
          else echo "We don't have this book"; 
      }
      else echo json_encode($res);

*/

      }



     mysqli_close($link);
    
      }

?>