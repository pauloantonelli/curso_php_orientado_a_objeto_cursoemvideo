<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Aula 04 P.O.O</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<pre>
    <?php
        require_once 'Caneta.php';
        require_once 'Caneta-construtor-tipado.php';
        $c1 = new Caneta();
        $c1->setModelo("BIC");
        $c1->setPonta(0.5);
        print_r($c1);
        echo "Eu tenho uma caneta {$c1->getModelo()} de ponta {$c1->getPonta()}";

        $c2 = new CanetaConstruct('BIC', 0.5, 'Azul');
        print_r($c2);
    ?>
</pre>
</body>
</html>