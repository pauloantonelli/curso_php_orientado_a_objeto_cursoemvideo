<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Exercicio 01</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <?php
        require_once 'FoneBluetooth.php';
    //propaganda de venda
        $foneVenda = new Fone;
        $foneVenda->tecnologia = 'Bluetooth 2.0';
        $foneVenda->material = 'Plastico';
        $foneVenda->botoes = 6;
        $foneVenda->cor = 'preto com azul';
        $foneVenda->entradasP2 = 2;
        print_r($foneVenda);
        //var_dump($foneVenda);
        echo "<br/>";

    //uso do cliente apos comprar
        //iniciando dispositivo
        $foneCliente = new Fone;
        $foneCliente->ligar();
        $foneCliente->carregar();

        $foneCliente->carregador = true;
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
        //var_dump($foneVenda);
    ?>
</body>
</html>