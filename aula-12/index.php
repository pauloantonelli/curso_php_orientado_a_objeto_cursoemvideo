<pre>
    <?php
        require_once 'ave.php';
        require_once 'mamifero.php';
        require_once 'peixe.php';
        require_once 'reptil.php';
        require_once 'canguru.php';
        require_once 'cachorro.php';
        require_once 'cobra.php';
        require_once 'tartaruga.php';
        require_once 'goldfish.php';
        require_once 'arara.php';

        $a = new Ave();
        $m = new Mamifero();
        $p = new Peixe();
        $r = new Reptil();
        $c = new Canguru();
        $k = new Cachorro();
        $t = new Tartaruga();

        echo '<br/>';
        $a->locomover();
        echo '<br/>';
        $m->locomover();
        echo '<br/>';
        $p->locomover();
        echo '<br/>';
        $r->locomover();
        echo '<br/>';
        $c->locomover();
        echo '<br/>';
        $k->locomover();
        echo '<br/>';
        $t->locomover();
        echo '<br/>';
        $c->emitirSom();
        echo '<br/>';
        $k->emitirSom();
        echo '<br/>';
        $t->emitirSom();
        echo '<br/>';
    ?>
</pre>