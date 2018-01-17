<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title><?php echo "PHP assignment by: "Agus Judistira" (fix PHP syntax errors)" ?></title>
  </head>

  <body>
    <?php
        $ages = {10,5O,39,40,67,99,7,2,10,88}
        $sum = 0;

        function getAverageAge(input) {
          for($i=1; $i<count($input); $i++) {
            $sum += $input[$i];
          }

          return $sum / $i;
        }

        echo getAverageAge($ages);
    ?>
  </body>
</html>
