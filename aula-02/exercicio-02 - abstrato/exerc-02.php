<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Exercicio 02</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <?php
        require_once 'alunoSenac.php';

        $aluno1 = new alunosenac;
        $aluno1->nome = 'Paulo';
        $aluno1->idade = 27;
        $aluno1->curso = 'ProgrWeb';
        $aluno1->aulasSemanais = 2;
        $aluno1->horaChegada = '13:30';
        $aluno1->horaSaida = '17:30';
        $aluno1->professor = 'Weslly';
        $aluno1->numeroSala = 46;
        $aluno1->enderecoSenac = 'Senac Taboão';
        $aluno1->colegasSala = array('Fran', 'Silmeire', 'Keithy');
        print_r($aluno1);
        echo "<br/>";
        $aluno2 = new alunosenac;
        $aluno2->nome = 'Luciele';
        $aluno2->idade = 20;
        $aluno2->curso = 'Doceiro';
        $aluno2->aulasSemanais = 5;
        $aluno2->horaChegada = '08:30';
        $aluno2->horaSaida = '12:30';
        $aluno2->professor = 'Talita';
        $aluno2->numeroSala = 60;
        $aluno2->enderecoSenac = 'Senac Taboão';
        $aluno2->colegasSala = array('Karen', 'Rose', 'Biatriz');
        print_r($aluno2);
        echo "<br/>";

        $aluno1->aluno();
        print_r($aluno1);
    ?>
</body>
</html>