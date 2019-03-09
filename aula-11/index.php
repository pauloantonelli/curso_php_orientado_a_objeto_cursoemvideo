<pre>
    <?php

        require_once 'pessoa.php';
        require_once 'visitante.php';
        require_once 'aluno.php';
        require_once 'professor.php';
        require_once 'bolsista.php';
        require_once 'tecnico.php';

        $v1 = new Visitante();
        $a1 = new Aluno();
        $b1 = new Bolsista();

        $v1->setNome("Juvenal");
        $v1->setAniver(33);
        $v1->setSexo("M");
        print_r($v1);

        $a1->setNome("Pedro");
        $a1->setMatricula(111);
        $a1->setSexo("M");
        $a1->setCurso("Informática");
        print_r($a1);
        
        $b1->setMatricula(1112);
        $b1->setNome("Juliana");
        $b1->setBolsa(12.5);
        $b1->setCurso("Administração");
        $b1->setAniver(18);
        $b1->setSexo("F");
        $b1->pagarMensalidade();
        print_r($b1);
    ?>
</pre>