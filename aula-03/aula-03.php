<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Aula 03 P.O.O</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <?php
        require_once 'Caneta.php';
        $c1 = new Caneta;
        $c1->modelo = "BIC Cristal";
        $c1->cor = 'Azul';
        //$c1->ponta = '0.5';
        print_r($c1);
        echo "<br/>";
        $c1->tampar();
        $c1->rabiscar();
        print_r($c1);
        echo "<br/>";
        $c2 = new Caneta;
        $c2->cor = 'Vermelha';
        //$c2->ponta = '1.0';
        //$c2->carga = '80%'; 
        $c2->tampar();
        print_r($c2);
    ?>
</body>
</html>