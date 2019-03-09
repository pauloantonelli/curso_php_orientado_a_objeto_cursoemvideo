<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Encapsulamento</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <h1>Projeto Controle Remoto</h1>
    <pre>
    <?php
        require_once 'controleRemoto.php';
        $c1 = new ControleRemoto();
        $c1->ligar();
        $c1->maisVolume();
        $c1->abrirMenu();
    ?>
    </pre>
</body>
</html>