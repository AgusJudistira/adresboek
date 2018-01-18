<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Fix errors</title>
  </head>

  <body>
    <?php
        echo nl2br("PHP assignment by: Agus Judistira (fix PHP syntax errors)\n");
        
        $ages = array(10,50,39,40,67,99,7,2,10,8);

        function getAverageAge($input) {
            $sum = 0;
          for($i=0; $i<count($input); $i++) {
            $sum += $input[$i];
            echo $i.nl2br("\n");
          }

          return $sum/$i;
        }

        echo nl2br("\nGemiddelde: ".getAverageAge($ages));
    ?>
  </body>
</html>
