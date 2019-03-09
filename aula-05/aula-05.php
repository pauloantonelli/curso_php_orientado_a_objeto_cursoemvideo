<!doctype <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>aula 05</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <pre>
        <?php
            require_once 'conta.php';
            $cliente1 = new Conta('Paulo', 0001);
            $cliente2 = new Conta('Luciele', 0002);

            $cliente1->abrirConta('cc');
            $cliente1->setDono('Paulo Ricardo');
            $cliente2->abrirConta('cp');
            $cliente2->setDono('Luciele Antonelli');
            
            $cliente1->depositar(300);
            $cliente2->depositar(500);
            
            $cliente2->sacar(100);

            $cliente1->pagarMensal();
            $cliente2->pagarMensal();

            $cliente1->sacar(1000);
            $cliente2->sacar(530);

            $cliente1->fecharConta();
            $cliente2->fecharConta();

            print_r($cliente1);
            print_r($cliente2);
        ?>
    </pre>
</body>
</html>