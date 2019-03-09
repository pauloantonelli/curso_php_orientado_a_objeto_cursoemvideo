<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Exercicio Aula 04</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<pre>
    <?php
        require_once 'FoneBluetooth.php';
    //propaganda de venda
        $foneVenda = new Fone('Bluetooth 2.0','Plastico', 6, 'preto com azul', 2);
        //print_r($foneVenda);
        echo "<br/>";

    //uso do cliente apos comprar
        //iniciando dispositivo
        $foneCliente = new Fone('Bluetooth 2.0','Plastico', 6, 'Rosa com roxo', 2);
        print_r($foneCliente);

        $foneCliente->ligar();
        $foneCliente->carregar();

        $foneCliente->conectaTomada();
        $foneCliente->carregar();
        $foneCliente->ligar();

        //usando dispositivo
        $foneCliente->conectaCelular();
        $foneCliente->conectaCelular();
        $foneCliente->carregar();

        $foneCliente->ouvirMusica();
        $foneCliente->receberMusica();
        $foneCliente->ouvirMusica();
        $foneCliente->fazerLigacao();
        $foneCliente->desligarLigacao();

        $foneCliente->desligar();

        print_r($foneCliente);
    ?>
</pre>
</body>
</html>