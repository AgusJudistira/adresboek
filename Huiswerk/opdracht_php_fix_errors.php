<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Fix errors</title>
  </head>

  <body>
    <?php
        echo "PHP assignment by: Agus Judistira (fix PHP syntax errors)";
        phpinfo();
        $ages = array(10,50,39,40,67,99,7,2,10,8);
        $sum = 0;

        function getAverageAge($input) {
          for($i=1; $i<count($input); $i++) {
            $sum += $input[$i];
            echo $i;
          }

          return $sum/$i;
        }

        echo getAverageAge($ages);
    ?>
  </body>
</html>
